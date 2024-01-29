import {useTranslation} from 'react-i18next';

const usei18next = () => {
  const {t: translate, i18n} = useTranslation();

  return {translate, i18n};
};

export default usei18next;
