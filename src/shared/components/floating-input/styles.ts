import colors from 'shared/assets/colors';
import styled from 'styled-components';

interface LabelProps {
  isFocused: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f6fa;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: text;
`;

export const Label = styled.label<LabelProps>`
  background-color: transparent;
  padding: 8px 10px 0 10px;
  cursor: text;
  font-size: 12px;
  position: absolute;
  color: ${(props) =>
    props.isFocused ? colors.primary : 'rgba(0, 0, 0, 0.87)'};
  transform: ${(props) =>
    props.isFocused ? 'translateY(0)' : 'translateY(12px)'};
  font-size: ${(props) => (props.isFocused ? 12 : 15)}px;
  transition: all 0.2s ease-in-out;
`;

export const TextInput = styled.input`
  border: none;
  padding: 30px 10px 10px 10px;
  border: 1px solid ${colors.border};
  outline: none;
  border-radius: 3px;
`;
