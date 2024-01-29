import {IoAdd} from 'react-icons/io5';
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
`;

export const AddIcon = styled(IoAdd)`
  font-size: 18px;
  background-color: transparent;
`;
