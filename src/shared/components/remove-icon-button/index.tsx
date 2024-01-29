import React from 'react';

import {IconButton} from './styles';

interface Props {
  onClick: () => void;
  permission?: string;
}

const RemoveIconButton: React.FC<Props> = ({onClick, permission}) => {
  if (permission) return null;

  return <IconButton {...{onClick}} />;
};

export default RemoveIconButton;
