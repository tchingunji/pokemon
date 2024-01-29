import React from 'react';
import usei18next from 'shared/hooks/use-i18next';
import Loader from '../loader';

import {Container} from './styles';

interface Props {
  onClick?: () => void;
  label?: string;
  variant?: 'filled' | 'clean';
  icon: React.ReactNode;
  loading?: boolean;
}

const IconButton: React.FC<Props> = ({
  onClick,
  label,
  variant = 'clean',
  icon,
  loading,
}) => {
  const {translate} = usei18next();

  if (loading)
    return (
      <Container {...{variant}}>
        <Loader />
      </Container>
    );

  return (
    <Container {...{onClick, variant}}>
      {icon}
      {label ?? translate('filterList:confirmOptions')}
    </Container>
  );
};

export default IconButton;
