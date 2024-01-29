import React from 'react';
import {IoLockClosedOutline, IoPersonOutline} from 'react-icons/io5';
import {Container} from './styles';
import useLoginState from './state';
import usei18next from 'shared/hooks/use-i18next';
import TitleBar from 'shared/components/title-bar';
import Table from 'shared/components/table';
import {Image} from '@mantine/core';

const Login: React.FC = () => {
  const {
    loading,
    onLoadMore,
    data,
    tableProjection,
    loadingMore,
    onRefresh,
    onRowClick,
  } = useLoginState();
  const {translate} = usei18next();
  return (
    <Container>
      <TitleBar
        title={translate('pokemon:label.list')}
        {...{
          refresh: {loading: loading || loadingMore, onRefresh},
        }}
      />
      <Table
        {...{
          module: 'pokemon',
          projection: tableProjection,
          data: data as any,
          loading,
          onRowClick,
        }}
        pagination={{
          onLoadMore,
          loading: loadingMore,
          isLastPage: false,
          count: 1302,
        }}
      />
    </Container>
  );
};

export default Login;
