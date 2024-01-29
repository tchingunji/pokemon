import styled from 'styled-components';
import colors from 'shared/assets/colors';

interface ContainerProps {
  borderless: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${(props) => !props.borderless && 'border: 1px solid ${colors.lightGray}'};
  padding: 15px;
  border-radius: 10px;
  background-color: white;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-self: flex-start;
`;

export const Title = styled.p`
  font-size: 12px;
  color: ${colors.gray};
  font-weight: 600;
`;
