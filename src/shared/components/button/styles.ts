import styled from 'styled-components';
import colors from 'shared/assets/colors';
import Spinner from 'react-spinners/ClipLoader';

interface ButtonProps {
  widthMode?: 'expand' | 'fit-content';
  size?: 'small' | 'default';
  danger?: boolean;
}

interface LoaderProps {
  danger?: boolean;
}

export const Container = styled.button<ButtonProps>`
  width: ${(props) =>
    props.widthMode === 'fit-content' ? 'fit-content' : '100%'};
  padding: 10px 15px;
  font-size: ${(props) => (props.size === 'small' ? 12 : 14)}px;
  background-color: ${(props) => (props.danger ? colors.red : colors.primary)};
  transition: all 0.2s ease-in-out;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 3px;
  font-weight: bold;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: ${(props) =>
      props.danger ? colors.redHover : colors.primaryHover};
  }
`;

export const Loader = styled.div<LoaderProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.danger ? colors.red : colors.primary)};
`;

export const Loading = styled(Spinner).attrs({
  size: 18,
  color: colors.white,
})``;
