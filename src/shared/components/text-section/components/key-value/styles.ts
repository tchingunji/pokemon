import colors from 'shared/assets/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

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

export const Label = styled.label`
  color: ${colors.darkGray};
  font-weight: bold;

  @media (max-width: 975px) {
    min-width: fit-content;
  }
`;

export const Value = styled.div``;
