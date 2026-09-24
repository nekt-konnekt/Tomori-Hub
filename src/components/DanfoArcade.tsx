import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Volume2, VolumeX, RotateCcw, Play, Pause } from 'lucide-react';

interface DanfoArcadeProps {
  embedded?: boolean;
}

export const DanfoArcade: React.FC<DanfoArcadeProps> = ({ embedded = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Audio Context Ref
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Horn sound generator using Web Audio
  const playHornSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      const ctx = audioCtxRef.current;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sawtooth';
      osc2.type = 'square';
      osc1.frequency.setValueAtTime(290, ctx.currentTime); // Classic Danfo Dual-tone Horn
      osc2.frequency.setValueAtTime(348, ctx.currentTime);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 0.35);
      osc2.stop(ctx.currentTime + 0.35);
    } catch {
      // Audio not supported or blocked
    }
  }, [soundEnabled]);

  // Crash Sound
  const playCrashSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) return;
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.4);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch {
      // Ignore
    }
  }, [soundEnabled]);

  // Game loop state refs to prevent re-renders during 60fps loop
  const gameStateRef = useRef({
    lane: 1, // 0: Left, 1: Center, 2: Right
    targetX: 160,
    currentX: 160,
    speed: 5,
    obstacles: [] as { x: number; y: number; type: 'car' | 'hawker' | 'pothole'; lane: number; passed: boolean }[],
    lastObstacleSpawn: 0,
    stripeOffset: 0,
    score: 0,
  });

  const laneXCoordinates = [80, 160, 240];

  const changeLane = useCallback((dir: 'left' | 'right') => {
    if (isGameOver || !isPlaying) return;
    const currentLane = gameStateRef.current.lane;
    let nextLane = currentLane;
    if (dir === 'left' && currentLane > 0) nextLane -= 1;
    if (dir === 'right' && currentLane < 2) nextLane += 1;

    if (nextLane !== currentLane) {
      gameStateRef.current.lane = nextLane;
      gameStateRef.current.targetX = laneXCoordinates[nextLane];
    }
  }, [isGameOver, isPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying) return;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        changeLane('left');
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        changeLane('right');
      } else if (e.key === ' ' || e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        playHornSound();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, changeLane, playHornSound]);

  // Start / Restart game
  const startGame = () => {
    gameStateRef.current = {
      lane: 1,
      targetX: 160,
      currentX: 160,
      speed: 4.5,
      obstacles: [],
      lastObstacleSpawn: Date.now(),
      stripeOffset: 0,
      score: 0,
    };
    setScore(0);
    setIsGameOver(false);
    setIsPlaying(true);
    playHornSound();
  };

  // Canvas render loop
  useEffect(() => {
    if (!isPlaying || isGameOver) return;
    let animationFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gameWidth = 320;
    const gameHeight = 440;

    const render = () => {
      const state = gameStateRef.current;

      // Update Danfo X position smoothly (spring interpolation)
      state.currentX += (state.targetX - state.currentX) * 0.25;

      // Update stripes
      state.stripeOffset = (state.stripeOffset + state.speed) % 40;

      // Spawn obstacles
      const now = Date.now();
      const spawnInterval = Math.max(900, 1600 - state.score * 12);
      if (now - state.lastObstacleSpawn > spawnInterval) {
        state.lastObstacleSpawn = now;
        const availableLanes = [0, 1, 2];
        const randomLane = availableLanes[Math.floor(Math.random() * availableLanes.length)];
        const types: ('car' | 'hawker' | 'pothole')[] = ['car', 'car', 'hawker', 'pothole'];
        const chosenType = types[Math.floor(Math.random() * types.length)];

        state.obstacles.push({
          lane: randomLane,
          x: laneXCoordinates[randomLane],
          y: -50,
          type: chosenType,
          passed: false,
        });
      }

      // Update obstacles
      for (let i = state.obstacles.length - 1; i >= 0; i--) {
        const obs = state.obstacles[i];
        obs.y += state.speed;

        // Score increment when passed safely
        if (!obs.passed && obs.y > 340) {
          obs.passed = true;
          state.score += 10;
          setScore(state.score);
          if (state.score > highScore) setHighScore(state.score);
          // Gradually speed up
          state.speed = Math.min(10.5, 4.5 + state.score * 0.035);
        }

        // Collision Check (Danfo bounding box at y: 320 to 390, width: 36, height: 64)
        const danfoLeft = state.currentX - 18;
        const danfoRight = state.currentX + 18;
        const danfoTop = 320;
        const danfoBottom = 384;

        let obsLeft = obs.x - 16;
        let obsRight = obs.x + 16;
        let obsTop = obs.y - 20;
        let obsBottom = obs.y + 20;

        if (obs.type === 'pothole') {
          obsLeft = obs.x - 12;
          obsRight = obs.x + 12;
        }

        const isColliding =
          danfoRight > obsLeft &&
          danfoLeft < obsRight &&
          danfoBottom > obsTop &&
          danfoTop < obsBottom;

        if (isColliding) {
          setIsGameOver(true);
          setIsPlaying(false);
          playCrashSound();
          return;
        }

        // Clean up out of bounds
        if (obs.y > gameHeight + 60) {
          state.obstacles.splice(i, 1);
        }
      }

      // DRAWING: Editorial Two-Tone Aesthetic
      // Road Canvas: Dark tarmac #1E1E1E with warm border hairlines
      ctx.fillStyle = '#1A1A1A';
      ctx.fillRect(0, 0, gameWidth, gameHeight);

      // Road curbs
      ctx.fillStyle = '#141414';
      ctx.fillRect(0, 0, 16, gameHeight);
      ctx.fillRect(gameWidth - 16, 0, 16, gameHeight);

      // Kerb markings (monochrome alternating dashes)
      ctx.fillStyle = '#FAF8F5';
      for (let y = -40 + state.stripeOffset; y < gameHeight; y += 40) {
        ctx.fillRect(14, y, 2, 20);
        ctx.fillRect(gameWidth - 16, y, 2, 20);
      }

      // Lane dividers (broken lines)
      ctx.strokeStyle = '#3A3A38';
      ctx.lineWidth = 2;
      ctx.setLineDash([16, 20]);
      ctx.lineDashOffset = -state.stripeOffset;

      // Divider 1 (between lane 0 and 1)
      ctx.beginPath();
      ctx.moveTo(120, 0);
      ctx.lineTo(120, gameHeight);
      ctx.stroke();

      // Divider 2 (between lane 1 and 2)
      ctx.beginPath();
      ctx.moveTo(200, 0);
      ctx.lineTo(200, gameHeight);
      ctx.stroke();

      ctx.setLineDash([]); // Reset line dash

      // DRAW OBSTACLES
      state.obstacles.forEach((obs) => {
        if (obs.type === 'car') {
          // Civilian car: Minimalist slate rectangle with roof and lights
          ctx.fillStyle = '#333333';
          ctx.fillRect(obs.x - 15, obs.y - 25, 30, 50);
          ctx.strokeStyle = '#555555';
          ctx.lineWidth = 1;
          ctx.strokeRect(obs.x - 15, obs.y - 25, 30, 50);

          // Windshield
          ctx.fillStyle = '#1A1A1A';
          ctx.fillRect(obs.x - 11, obs.y - 12, 22, 10);
          // Taillights
          ctx.fillStyle = '#FAF8F5';
          ctx.fillRect(obs.x - 12, obs.y + 22, 6, 2);
          ctx.fillRect(obs.x + 6, obs.y + 22, 6, 2);
        } else if (obs.type === 'hawker') {
          // Lagos street hawker with tray
          ctx.fillStyle = '#8E8B85';
          ctx.beginPath();
          ctx.arc(obs.x, obs.y, 8, 0, Math.PI * 2);
          ctx.fill();
          // Goods tray
          ctx.strokeStyle = '#FAF8F5';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.ellipse(obs.x, obs.y - 12, 14, 5, 0, 0, Math.PI * 2);
          ctx.stroke();
        } else if (obs.type === 'pothole') {
          // Pothole on asphalt
          ctx.fillStyle = '#0D0D0D';
          ctx.beginPath();
          ctx.ellipse(obs.x, obs.y, 14, 8, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#333333';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // DRAW THE DANFO (Lagos Yellow Commercial Minibus)
      // Base bus body in iconic Lagos Danfo yellow/ochre (#F5A623 or high-contrast two-tone)
      const dX = state.currentX;
      const dY = 320;

      // Drop shadow / tire track
      ctx.fillStyle = '#0D0D0D';
      ctx.fillRect(dX - 17, dY + 6, 34, 60);

      // Main Danfo Yellow Body
      ctx.fillStyle = '#F5A623';
      ctx.fillRect(dX - 16, dY, 32, 64);

      // Iconic Danfo Twin Horizontal Black Stripes
      ctx.fillStyle = '#141414';
      ctx.fillRect(dX - 16, dY + 16, 32, 5);
      ctx.fillRect(dX - 16, dY + 25, 32, 5);

      // Front windshield (facing up)
      ctx.fillStyle = '#1A1A1A';
      ctx.fillRect(dX - 13, dY + 3, 26, 10);

      // Rear window
      ctx.fillStyle = '#1A1A1A';
      ctx.fillRect(dX - 13, dY + 54, 26, 6);

      // Side mirrors
      ctx.fillStyle = '#141414';
      ctx.fillRect(dX - 19, dY + 10, 3, 5);
      ctx.fillRect(dX + 16, dY + 10, 3, 5);

      // Headlight beams
      ctx.fillStyle = 'rgba(250, 248, 245, 0.08)';
      ctx.beginPath();
      ctx.moveTo(dX - 12, dY);
      ctx.lineTo(dX - 32, dY - 70);
      ctx.lineTo(dX + 32, dY - 70);
      ctx.lineTo(dX + 12, dY);
      ctx.closePath();
      ctx.fill();

      // Front lights
      ctx.fillStyle = '#FAF8F5';
      ctx.fillRect(dX - 13, dY, 5, 2);
      ctx.fillRect(dX + 8, dY, 5, 2);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, isGameOver, highScore, playCrashSound]);

  return (
    <div
      className={`border border-[#E5E2DC] bg-[#FAF8F5] p-5 flex flex-col items-center ${
        embedded ? 'w-full max-w-sm mx-auto' : 'w-full'
      }`}
    >
      <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#E5E2DC] text-xs">
        <div className="flex items-center gap-3">
          <span className="font-bold tracking-tight uppercase text-[#141414]">
            Danfo Rush (V1 Prototype)
          </span>
          <span className="text-[#66635F]">Third Mainland Bridge</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1 hover:text-[#141414] text-[#66635F] cursor-pointer"
            title={soundEnabled ? 'Mute Danfo Horn' : 'Enable Danfo Horn'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Screen container */}
      <div className="relative w-[320px] h-[440px] bg-[#1A1A1A] border border-[#2E2E2E] overflow-hidden select-none">
        <canvas
          ref={canvasRef}
          width={320}
          height={440}
          className="w-full h-full block cursor-pointer"
          onClick={() => {
            if (!isPlaying && !isGameOver) startGame();
            else playHornSound();
          }}
        />

        {/* Start Overlay */}
        {!isPlaying && !isGameOver && (
          <div className="absolute inset-0 bg-[#141414]/90 flex flex-col items-center justify-center p-6 text-center text-[#FAF8F5]">
            <span className="text-xs uppercase tracking-widest text-[#8E8B85] mb-2">
              Lagos Traffic Simulator
            </span>
            <h3 className="text-xl font-bold tracking-tight mb-2">
              DANFO RUSH
            </h3>
            <p className="text-xs text-[#A3A19C] max-w-[240px] leading-relaxed mb-6">
              Dodge hawkers, potholes and oncoming civilian cars. Tap horn to clear space.
            </p>

            <button
              onClick={startGame}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF8F5] text-[#141414] font-semibold text-xs tracking-wider uppercase hover:bg-white transition-colors cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Drive Now</span>
            </button>
            <p className="text-[11px] text-[#66635F] mt-4">
              Desktop: Left/Right arrows or A/D · Space: Horn
            </p>
          </div>
        )}

        {/* Game Over Overlay */}
        {isGameOver && (
          <div className="absolute inset-0 bg-[#141414]/95 flex flex-col items-center justify-center p-6 text-center text-[#FAF8F5]">
            <span className="text-xs uppercase tracking-widest text-[#8E8B85] mb-1">
              Collision! Agbero collected toll
            </span>
            <h3 className="text-2xl font-bold mb-1">ACCIDENT</h3>
            <div className="my-4 py-2 px-4 border border-[#333333] inline-block">
              <span className="text-xs text-[#8E8B85] block">Distance Traveled</span>
              <span className="text-2xl font-bold tabular-numbers">{score}m</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={startGame}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF8F5] text-[#141414] font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Play Again</span>
              </button>
            </div>
          </div>
        )}

        {/* Live HUD when playing */}
        {isPlaying && (
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs text-[#FAF8F5] pointer-events-none">
            <div className="bg-[#141414]/80 px-2 py-1 border border-[#333333]">
              <span className="text-[#8E8B85] text-[10px] uppercase mr-1">Speed</span>
              <span className="font-semibold tabular-numbers">
                {(gameStateRef.current.speed * 12).toFixed(0)} km/h
              </span>
            </div>

            <div className="bg-[#141414]/80 px-2 py-1 border border-[#333333]">
              <span className="text-[#8E8B85] text-[10px] uppercase mr-1">Score</span>
              <span className="font-bold tabular-numbers">{score}</span>
            </div>
          </div>
        )}
      </div>

      {/* Touch / Handheld Controls for mobile and quick interactions */}
      <div className="w-[320px] mt-3 pt-3 border-t border-[#E5E2DC] flex items-center justify-between gap-2">
        <button
          onClick={() => changeLane('left')}
          disabled={!isPlaying}
          className="flex-1 py-2.5 text-xs font-semibold bg-[#FAF8F5] border border-[#141414] hover:bg-[#141414] hover:text-[#FAF8F5] transition-colors disabled:opacity-30 cursor-pointer text-center"
        >
          ← Lane Left
        </button>

        <button
          onClick={playHornSound}
          disabled={!isPlaying}
          className="px-4 py-2.5 text-xs font-semibold bg-[#141414] text-[#FAF8F5] hover:opacity-80 transition-opacity disabled:opacity-30 cursor-pointer"
          title="Blast Danfo Horn"
        >
          HORN 📯
        </button>

        <button
          onClick={() => changeLane('right')}
          disabled={!isPlaying}
          className="flex-1 py-2.5 text-xs font-semibold bg-[#FAF8F5] border border-[#141414] hover:bg-[#141414] hover:text-[#FAF8F5] transition-colors disabled:opacity-30 cursor-pointer text-center"
        >
          Lane Right →
        </button>
      </div>

      <div className="w-[320px] mt-2 text-[11px] text-[#66635F] text-center">
        <span>AI-prototyped mobile canvas engine · 60fps Web Audio loop</span>
      </div>
    </div>
  );
};
