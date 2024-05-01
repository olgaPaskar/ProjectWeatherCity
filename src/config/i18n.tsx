import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../locales/translation_en.json';
import translationRU from '../locales/translation_ru.json';

const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Устанавливаем язык по умолчанию
        fallbackLng: 'en', // Устанавливаем язык по умолчанию для случая, если нет перевода для выбранного языка
        interpolation: {
            escapeValue: false // Не нужно экранировать значения
        }
    });

export {i18n};

