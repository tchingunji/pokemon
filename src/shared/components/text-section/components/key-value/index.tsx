import React from 'react';
import {Container, Label, Value} from './styles';

interface Props {
  label: string;
  value: string | React.ReactNode;
}

const InlineText: React.FC<Props> = ({label, value}) => {
  return (
    <Container>
      <Label>{label}:</Label>
      <Value>{value}</Value>
    </Container>
  );
};

export default InlineText;
