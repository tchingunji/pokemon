import colors from 'shared/assets/colors';
import styled from 'styled-components';

interface ContainerProps {
  size: 'full' | 'half';
  disabled?: boolean;
}

interface Props {
  opened: boolean;
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

export const Input = styled.input<Props>`
  border: none;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  outline: none;
  border: 3px solid
    ${(props) => (props.opened ? colors.softBorder : colors.white)};
  border-radius: 5px;
  cursor: ${(props) => props.disabled && 'not-allowed'};
`;
