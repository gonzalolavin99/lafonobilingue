import { ui, defaultLang, type Lang } from './ui';

/** Detecta el idioma a partir de la URL: "/en/..." => en, resto => es. */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'en') return 'en';
  return defaultLang as Lang;
}

/** Devuelve el diccionario de textos del idioma dado. */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/** Construye una ruta con el prefijo de idioma correcto ("/" o "/en/"). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'es') return clean === '/' ? '/' : clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

/** URL de WhatsApp con el saludo del idioma correspondiente. */
export function waGreeting(whatsapp: string, lang: Lang): string {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(ui[lang].saludo)}`;
}

/** Dada la URL actual, devuelve la misma página en el otro idioma. */
export function getAlternatePath(url: URL, target: Lang): string {
  let path = url.pathname;
  if (path === '/en' || path.startsWith('/en/')) {
    path = path.slice(3) || '/';
  }
  if (!path.startsWith('/')) path = `/${path}`;
  return localizePath(path, target);
}
