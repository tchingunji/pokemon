import React, {useEffect, useState} from 'react';
import ReactTimeAgo from 'react-time-ago';

import Button from '../button';

import {Container, Title, Reload, Description, Spacer, Loader} from './styles';
import usei18next from 'shared/hooks/use-i18next';

export interface ActionButtonProps {
  title: string;
  onClick: () => void;
  permissions?: string[];
}

interface OnRefreshProps {
  onRefresh: () => void;
  loading: boolean;
}

interface Props {
  title: string;
  refresh?: OnRefreshProps;
  actionButton?: ActionButtonProps;
}

const TitleBar: React.FC<Props> = ({title, refresh, actionButton}) => {
  const [date, setDate] = useState<Date | undefined>();
  const {
    i18n: {language},
    translate,
  } = usei18next();

  useEffect(() => {
    if (refresh && !refresh.loading) setDate(new Date());
    else setDate(undefined);
  }, [refresh]);

  return (
    <Container>
      <Title>{title}</Title>
      {refresh && !refresh.loading && refresh.onRefresh && (
        <Reload onClick={refresh.onRefresh} />
      )}
      {refresh?.loading && <Loader />}
      <Description>
        {!refresh?.loading && date && (
          <ReactTimeAgo {...{date, locale: language}} />
        )}
        {refresh?.loading && translate('titleBar:loading')}
      </Description>
      <Spacer />
      {actionButton && (
        <Button
          onClick={actionButton.onClick}
          title={actionButton.title}
          widthMode="fit-content"
          size="small"
        />
      )}
    </Container>
  );
};

export default TitleBar;
