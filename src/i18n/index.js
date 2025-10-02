import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enCommon from './locales/en/common.json';

const resources = {en: { common: enCommon },};
export const supportedLngs = ["en", "ru"];
const fallbackLng = "en";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng,
        supportedLngs,
        ns: ["common"],
        nonExplicitSupportedLngs: true,
        defaultNS: "common",
        interpolation: { escapeValue: false },
        react: {
            useSuspense: true,
            bindI18n: "languageChanged",
            bindI18nStore: "added",
        },
        detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"],
            lookupLocalStorage: "i18nextLng",
            convertDetectedLanguage: (lng) =>
                supportedLngs.includes(lng) ? lng : fallbackLng,
        },
    });


export async function loadNamespace(ns = "common", lng = i18next.language) {
    const mod = await import(`./locales/${lng}/${ns}.json`);
    i18next.addResourceBundle(lng, ns, mod.default, true, true);
}

export default i18next;