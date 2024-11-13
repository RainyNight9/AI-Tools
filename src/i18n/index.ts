import { en } from './en';
import { zh } from './zh';

export type Locale = 'en' | 'zh';
export type TranslationKey = keyof typeof en;

export const translations = { en, zh } as const;