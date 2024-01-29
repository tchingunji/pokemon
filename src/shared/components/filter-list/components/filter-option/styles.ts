import {IoTrashBinOutline} from 'react-icons/io5';
import colors from 'shared/assets/colors';
import styled from 'styled-components';

interface Props {
  waiting?: boolean;
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input<Props>`
  font-size: 12px;
  font-weight: 600;
  height: 35px;
  padding: 8px 10px;
  border-radius: 5px;
  background-color: ${colors.softGray};
  color: ${(props) => (props.active ? colors.primary : colors.darkGray)};
  align-self: flex-start;
  border: 1px solid
    ${(props) => (props.active ? colors.primary : colors.softGray)};
  outline: none;
  width: ${(props) => `${props.value}`.length}ch;
  min-width: 80px;

  &:hover,
  &:focus {
    color: ${colors.darkGray};
    border: 1px solid ${colors.primary};
  }
`;

export const Remove = styled(IoTrashBinOutline)`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  padding: 5px;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    color: ${colors.red};
    transition: all ease-in-out 0.2s;
    background-color: ${colors.redSoft};
  }
`;
