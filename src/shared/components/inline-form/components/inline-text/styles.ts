import colors from 'shared/assets/colors';
import styled from 'styled-components';

interface ContainerProps {
  size: 'full' | 'half';
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.size === 'full' ? 100 : 50)}%;
  padding: 10px 15px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 10px;

  @media (max-width: 975px) {
    min-width: fit-content;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0;
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

export const Input = styled.div`
  border: none;
  height: 100%;
  padding: 10px;
  width: 100%;
`;
