import React from 'react';

import {Container, Loader, Loading} from './styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface HoverButtonProps extends ButtonProps {
  title?: string;
  onClick?: () => void;
  loading?: boolean;
  icon?: React.ReactNode;
}

const HoverButton: React.FC<HoverButtonProps> = ({
  title,
  loading,
  icon,
  ...props
}) => {
  return (
    <Container disabled={loading} type="submit" {...props}>
      {icon}
      {title}
      {loading && (
        <Loader>
          <Loading />
        </Loader>
      )}
    </Container>
  );
};

export default HoverButton;
