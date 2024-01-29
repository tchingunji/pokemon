import React from 'react';
import colors from 'shared/assets/colors';

import {Container} from './styles';

export type VariantEnum = 'success' | 'error' | 'warn' | 'info';

interface Props {
  variant?: VariantEnum;
  text: string;
}

const StatusButton: React.FC<Props> = ({variant = 'success', text}) => {
  const getColorByVariant = () => {
    switch (variant) {
      case 'success':
        return colors.success;
      case 'error':
        return colors.red;
      case 'warn':
        return colors.secondary;
      default:
        return colors.info;
    }
  };

  return <Container backgroundColor={getColorByVariant()}>{text}</Container>;
};

export default StatusButton;
