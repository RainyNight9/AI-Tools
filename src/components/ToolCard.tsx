import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { AITool } from '../data/tools';
import { useLanguage } from '../contexts/LanguageContext';

interface ToolCardProps {
  tool: AITool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 
                    overflow-hidden hover:shadow-md transition-all">
      <div className="h-32 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={tool.image}
          alt={tool.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate">{tool.name}</h3>
          {tool.isPaid && (
            <span className="flex-shrink-0 px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900 
                           text-blue-800 dark:text-blue-100 rounded">
              {t('paid')}
            </span>
          )}
        </div>
        <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{tool.description}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 
                   hover:text-blue-800 dark:hover:text-blue-300"
        >
          {t('visitWebsite')}
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}