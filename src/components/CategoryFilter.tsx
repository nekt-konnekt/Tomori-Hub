import React from 'react';

interface CategoryFilterProps<T extends string> {
  categories: { id: T; label: string; count?: number }[];
  selected: T;
  onChange: (category: T) => void;
}

export function CategoryFilter<T extends string>({
  categories,
  selected,
  onChange,
}: CategoryFilterProps<T>) {
  return (
    <div className="flex flex-wrap items-center gap-1 p-1 border border-[#E5E2DC] bg-[#FAF8F5] max-w-full">
      {categories.map((cat) => {
        const isActive = selected === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
              isActive
                ? 'bg-[#141414] text-[#FAF8F5]'
                : 'text-[#66635F] hover:text-[#141414] hover:bg-[#F2EFE9]'
            }`}
          >
            <span>{cat.label}</span>
            {cat.count !== undefined && (
              <span
                className={`ml-1.5 tabular-numbers text-[10px] ${
                  isActive ? 'text-[#A3A19C]' : 'text-[#8E8B85]'
                }`}
              >
                ({cat.count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
