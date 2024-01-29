import {Modal as MantineModal, ModalProps} from '@mantine/core';
import React from 'react';

interface Props extends ModalProps {
  opened: boolean;
  onClose: () => void;
  title?: string;
}

const Modal: React.FC<Props> = ({children, ...props}) => {
  return (
    <MantineModal
      {...props}
      transition="slide-down"
      size={'sm'}
      transitionDuration={400}>
      {children}
    </MantineModal>
  );
};

export default Modal;
