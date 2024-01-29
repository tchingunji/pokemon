import styled from 'styled-components';

interface Props {
  backgroundColor: string;
}

export const Container = styled.div<Props>`
  width: fit-content;
  padding: 5px 10px;
  border-radius: 3px;
  color: white;
  font-weight: 500;
  font-size: 12px;
  background-color: ${(props) => props.backgroundColor};
`;
