import {useEffect, useState} from 'react';
import usei18next from 'shared/hooks/use-i18next';
import api, {baseURL} from 'shared/services/api';
import {errorNotification} from 'shared/services/notification';
import {ProjectionProps} from '.';
import streamSaver from 'streamsaver';
import {useAppSelector} from 'shared/hooks/use-redux';
import {KeyValueProps, SelectDataProps} from 'shared/types';
import decodeError from 'shared/util/decore-error';

interface Props {
  module?: string;
  exportData?: boolean;
  projection?: ProjectionProps;
  fetchFilters?: string[];
}

const useTableState = ({
  exportData,
  projection,
  module,
  fetchFilters,
}: Props) => {
  const {translate, i18n} = usei18next();
  const [loadingExportData, setLoadingExportData] = useState(false);
  const [filters, setFilters] = useState<KeyValueProps<SelectDataProps[]>>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loadingFilters, setLoadingFilters] = useState(false);
  
  useEffect(() => {
    handleGetFilters();
  }, []);

  const handleExportData = async () => {
    if (!exportData || !projection || !module) return;
    const {values, filter} = projection;

    setLoadingExportData(true);
    const filters = Object.keys(filter?.filters ?? {}).reduce((object, key) => {
      return {
        ...object,
        [key]: JSON.stringify(filter?.filters[key]),
      };
    }, {});
    try {
      const {body} = await fetch(
        `${baseURL}/${module}/xlsx?${new URLSearchParams({
          projection: values!.join(' '),
          ...filters,
        }).toString()}`,
        {
          headers: {
            language: i18n.language === 'pt' ? 'pt_BR' : 'en_US',
            Authorization: `Bearer `,
          },
        },
      );

      const fileStream = streamSaver.createWriteStream('planilha.xlsx');
      body?.pipeTo(fileStream);
    } catch (error) {
      errorNotification({
        title: translate('table:exportDataError'),
        message: (error as any).response.data.message,
      });
    }
    setLoadingExportData(false);
  };

  const handleGetFilters = async () => {
    if (!module || !fetchFilters) return;

    setLoadingFilters(true);
    try {
      const {data} = await api({
        url: `/${module}/filters`,
        method: 'GET',
        params: {projection: fetchFilters.join(' ')},
      });
      setFilters(data.data);
    } catch (error) {
      errorNotification({
        title: translate('table:getFiltersError'),
        message: decodeError(error),
      });
      setFilters(undefined);
    }
    setLoadingFilters(false);
  };

  return {translate, loadingExportData, handleExportData, filters};
};

export default useTableState;
