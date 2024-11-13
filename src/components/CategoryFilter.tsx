import React from 'react';
import { categories } from '../data/tools';
import { useLanguage } from '../contexts/LanguageContext';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onSelect }: CategoryFilterProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect('')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all
          ${
            selectedCategory === ''
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
      >
        {t('allCategories')}
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all
            ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}