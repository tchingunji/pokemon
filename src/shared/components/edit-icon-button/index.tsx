import React from 'react';

import {EditIcon} from './styles';

interface Props {
  onClick?: () => void;
}

const EditIconButton: React.FC<Props> = ({onClick}) => {
  return <EditIcon {...{onClick}} />;
};

export default EditIconButton;
