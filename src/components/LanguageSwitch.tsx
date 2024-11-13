import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
      className="px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {locale === 'en' ? '中文' : 'EN'}
    </button>
  );
}