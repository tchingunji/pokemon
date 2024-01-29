import React from 'react';
import usei18next from 'shared/hooks/use-i18next';
import {Container, Label, Value} from './styles';

interface Props {
  label: string;
  value: string;
}

const Link: React.FC<Props> = ({label, value}) => {
  const {translate} = usei18next();

  return (
    <Container>
      <Label>{label}:</Label>
      <Value href={value}>{translate('alerts:alertDetails.view')}</Value>
    </Container>
  );
};

export default Link;
