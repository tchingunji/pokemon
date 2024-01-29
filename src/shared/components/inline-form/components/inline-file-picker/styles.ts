import colors from 'shared/assets/colors';
import styled from 'styled-components';

interface ContainerProps {
  size: 'full' | 'half';
  disabled?: boolean;
}

interface InputProps {
  disabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.size === 'full' ? 100 : 50)}%;
  padding: 10px 15px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 10px;
  cursor: ${(props) => props.disabled && 'not-allowed'};

  .mantine-Popover-root {
    width: 100%;
    height: 100%;
  }
`;

export const Label = styled.label`
  min-width: 200px;
  color: ${colors.darkGray};
  font-weight: 500;

  @media (max-width: 975px) {
    min-width: fit-content;
  }
`;

export const Input = styled.div<InputProps>`
  display: none;
  border: none;
  width: fit-content;
  padding: 10px;
  display: flex;
  align-items: center;
  outline: none;
  border-radius: 5px;
  background-color: ${colors.background};
  color: black;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease-in-out;
`;

export const HiddenInput = styled.input.attrs({
  type: 'file',
  accept: 'application/pdf',
})`
  display: none;
`;

export const FileHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Link = styled.a`
  width: fit-content;
  height: 38px;
  display: flex;
  align-items: center;
`;
