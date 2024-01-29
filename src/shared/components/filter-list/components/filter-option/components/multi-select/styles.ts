import {FaCheck} from 'react-icons/fa';
import colors from 'shared/assets/colors';
import styled from 'styled-components';

interface ContainerProps {
  full: boolean;
}

interface Props {
  active: boolean;
}

interface CheckBoxProps {
  active: boolean;
}

interface ButtonProps {
  waiting?: boolean;
  active?: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 15px;
  border-radius: 8px;
  min-width: ${(props) => (props.full ? 350 : 80)}px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  overflow: hidden;

  padding-bottom: 45px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${colors.softGray};
  background-color: ${colors.softGray};
  font-size: 14px;
  margin-bottom: 10px;

  &:focus {
    background-color: ${colors.white};
    outline: 1px solid ${colors.primary};
  }
`;

export const OptionList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckBox = styled.div<CheckBoxProps>`
  padding: 2px;
  width: 18px;
  height: 18px;
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  margin-right: 5px;

  background-color: ${(props) =>
    props.active ? colors.primary : colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Active = styled(FaCheck)`
  color: ${colors.white};
  background-color: ${colors.primary};
`;

export const Option = styled.div<Props>`
  height: 40px;
  padding: 10px 8px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  color: ${colors.darkGray};
  justify-content: flex-start;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${colors.primaryLight};
    color: ${colors.primary};
  }
`;

export const AddButtom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  color: ${colors.white};
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
`;

export const Button = styled.div<ButtonProps>`
  position: relative;
  font-size: 12px;
  font-weight: 600;
  height: 35px;
  min-width: 35px;
  padding: 8px 10px;
  border-radius: 5px;
  background-color: ${colors.softGray};
  color: ${(props) =>
    props.waiting
      ? colors.primary
      : props.active
      ? colors.primary
      : colors.darkGray};
  cursor: pointer;
  align-self: flex-start;
  border: 1px solid
    ${(props) =>
      props.waiting
        ? colors.primary
        : props.active
        ? colors.primary
        : colors.softGray};

  &:hover {
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
  }
`;
