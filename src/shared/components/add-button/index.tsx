import React from 'react';
import usei18next from 'shared/hooks/use-i18next';

import {Container, AddIcon} from './styles';

interface Props {
  onClick?: () => void;
  label?: string;
  variant?: 'filled' | 'clean';
}

const AddButton: React.FC<Props> = ({onClick, label, variant = 'clean'}) => {
  const {translate} = usei18next();

  return (
    <Container {...{onClick, variant}}>
      <AddIcon />
      {label ?? translate('filterList:confirmOptions')}
    </Container>
  );
};

export default AddButton;
