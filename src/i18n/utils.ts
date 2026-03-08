import { translations, type Lang } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Lang;
  return 'en';
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === 'en') return path;
  return `/${lang}${path}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'nl' : 'en';
}
