import colors from 'shared/assets/colors';
import styled from 'styled-components';

interface ContainerProps {
  size: 'full' | 'half';
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

  & > div {
    height: 38px;
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
