import React from 'react';
import {Tooltip} from '@mantine/core';

import {Container, Loader, Loading} from './styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface CircleButtonProps extends ButtonProps {
  onClick?: () => void | Promise<void>;
  loading?: boolean;
  icon?: React.ReactNode;
  tooltip?: string;
  visible?: boolean;
}

const CircleButton: React.FC<CircleButtonProps> = ({
  loading,
  icon,
  tooltip,
  visible = true,
  ...props
}) => {
  const getContent = () => (
    <Container disabled={loading} type="submit" {...props}>
      {!loading && icon}
      {loading && (
        <Loader>
          <Loading />
        </Loader>
      )}
    </Container>
  );

  if (!visible) return null;

  return tooltip ? (
    <Tooltip position="top" label={tooltip}>
      {getContent()}
    </Tooltip>
  ) : (
    getContent()
  );
};

export default CircleButton;
