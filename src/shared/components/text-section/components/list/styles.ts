import colors from 'shared/assets/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;

  & + h1 {
    margin-top: 10px;
  }

  @media (max-width: 975px) {
    width: 100%;
    min-width: fit-content;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0;
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${colors.darkGray};
  font-weight: bold;

  @media (max-width: 975px) {
    min-width: fit-content;
  }
`;

export const Values = styled.div``;

export const Value = styled.div``;
