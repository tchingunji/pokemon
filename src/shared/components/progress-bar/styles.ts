import colors from 'shared/assets/colors';
import styled from 'styled-components';

export const Container = styled.div`
  height: 20px;
  width: 100%;
  background-color: ${colors.lightGray};
  border-radius: 10px;
`;

export const Filler = styled.div<{completed: number; bgColor: string}>`
  height: 100%;
  width: ${(props) => `${props.completed}%`};
  background-color: ${(props) => props.bgColor};
  border-radius: inherit;
  text-align: right;
`;

export const Label = styled.span`
  padding: 5px;
  color: ${colors.white};
  font-weight: bold;
`;
