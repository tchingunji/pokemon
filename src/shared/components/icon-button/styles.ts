import colors from 'shared/assets/colors';
import styled from 'styled-components';

interface Props {
  variant: 'filled' | 'clean';
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  border-radius: 5px;
  gap: 5px;
  width: fit-content;
  font-weight: 500;
  font-size: 12px;

  ${(props) =>
    props.variant === 'filled' &&
    `
      color: ${colors.primary};
      background-color: ${colors.primaryLight};
    `};

  &:hover {
    transition: all ease-in-out 0.2s;
    color: ${colors.primary};
    background-color: ${colors.primaryLight};
  }

  svg {
    font-size: 16px;
    background-color: transparent;
  }
`;
