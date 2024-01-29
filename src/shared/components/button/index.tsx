import React from 'react';

import {Container, Loader, Loading} from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => void;
  widthMode?: 'expand' | 'fit-content';
  size?: 'small' | 'default';
  loading?: boolean;
  danger?: boolean;
  permission?: string;
  visible?: boolean;
}

const Button: React.FC<Props> = ({
  widthMode = 'expand',
  size = 'default',
  loading,
  onClick,
  permission,
  visible = true,
  ...props
}) => {

  const clickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick != undefined) {
      e.stopPropagation();
      onClick();
    }
  };

  if ((permission) || !visible) return null;

  return (
    <Container
      disabled={loading}
      type="submit"
      onClick={(event) => clickButton(event)}
      {...{widthMode, size, ...props}}>
      {props.title}
      {loading && (
        <Loader danger={props.danger}>
          <Loading />
        </Loader>
      )}
    </Container>
  );
};

export default Button;
