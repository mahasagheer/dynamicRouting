import i18n from "i18next";
import LanguageDetector from "i18next-cli-language-detector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

import tEn from "./locales/en/translation.json";
import tKo from "./locales/ko/translation.json";
import tJa from "./locales/ja/translation.json";
import tHi from "./locales/hi/translation.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: "en",
    debug: true,
    saveMissing: true,
    resources: {
      en: {
        translation: tEn,
      },
      ko: {
        translation: tKo,
      },
      ja: {
        translation: tJa,
      },
      hi: {
        translation: tHi,
      },
    },
  });

// import i18next from "i18next";
// import HttpBackend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";

// const apiKey = "ykNsrWGHtTUvEhOk7RPf7Q";
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

// i18next
//   .use(HttpBackend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: "en",

//     ns: ["default"],
//     defaultNS: "default",

//     supportedLngs: ["en", "hi", "ko", "ur", "de", "zh"],

//     backend: {
//       loadPath: loadPath,
//     },
//   });
