import colors from 'shared/assets/colors';
import styled from 'styled-components';

interface Props {
  active: boolean;
}

interface ButtonProps {
  waiting?: boolean;
  active?: boolean;
}

export const Container = styled.div`
  min-width: 350px;
  overflow: hidden;
  background-color: white;
  max-height: 400px;
  padding: 15px;
  overflow-y: auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${colors.softGray};
  background-color: ${colors.softGray};
  border: 2px solid ${colors.white};
  font-size: 14px;
  margin-bottom: 10px;

  &:focus {
    background-color: ${colors.white};
    border: 2px solid ${colors.primary};
    outline: none;
  }
`;

export const OptionList = styled.div`
  display: flex;
  flex-direction: column;
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
  background-color: ${(props) => props.active && colors.primary};
  color: ${(props) => (props.active ? colors.white : colors.darkGray)};
  justify-content: flex-start;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${(props) =>
      props.active ? colors.primary : colors.primaryLight};
    color: ${(props) => (props.active ? colors.white : colors.primary)};
  }
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
