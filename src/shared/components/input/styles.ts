import colors from 'shared/assets/colors';
import styled from 'styled-components';

interface InputProps {
  icon: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  gap: 5px;
`;

export const Label = styled.label`
  cursor: text;
  font-size: 14px;
  color: #212529;
  font-weight: 500;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.border};
  border-radius: 3px;
  overflow: hidden;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 18px;
`;

export const TextInput = styled.input<InputProps>`
  flex: 1;
  border: none;
  padding-left: ${(props) => (props.icon ? 0 : 10)}px;
  outline: none;
  height: 40px;
  background-color: transparent;
`;
