import colors from 'shared/assets/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: 3px solid ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
`;
