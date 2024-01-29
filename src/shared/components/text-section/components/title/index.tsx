import React from 'react';
import {Title} from './styles';

interface Props {
  label: string;
}

const InlineText: React.FC<Props> = ({label}) => {
  return <Title>{label}</Title>;
};

export default InlineText;
