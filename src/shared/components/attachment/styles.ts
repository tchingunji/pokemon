import styled from 'styled-components';
import colors from 'shared/assets/colors';

interface ContainerProp {
  a?: string;
}

export const Container = styled.div<ContainerProp>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  button {
    transition: 0.2s;
    border: none;
    background-color: transparent;

    &:not(:last-child) {
      margin-right: 20px;
    }

    &:hover {
      transform: scale(1.5);
    }

    &:active {
      transform: scale(0.8);
    }
  }
`;

export const ButtonIcon = styled.button`
  cursor: pointer;
  color: ${colors.primary};
`;

export const PopoverContainer = styled.div`
  display: flex;
`;
