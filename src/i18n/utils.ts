import { defaultLang, translations } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in translations) return lang as keyof typeof translations;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
    return function t(key: string) {
        // This is a simple helper if we need dot notation access, 
        // but we can also access the object directly.
        // Keeping it simple for now, components will likely use translations[lang].section.key
        return translations[lang];
    }
}
