import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as en from './locales/en';
import * as pt from './locales/pt';

const resources = {
  en: en,
  pt: pt,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  ns: Object.keys(en),
  keySeparator: '.',
  nsSeparator: ':',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
