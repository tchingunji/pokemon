import * as en from 'config/i18next/locales/en';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof en;
  }
}