import colors from 'shared/assets/colors';
import styled from 'styled-components';

interface ColumnProps {
  clamp?: number;
}

export const Container = styled.td<ColumnProps>`
  padding: 15px;
  font-size: 12px;
  border-bottom: 1px solid ${colors.lightGray};
  color: ${colors.darkGray};
  font-weight: 500;

  ${({clamp}) =>
    clamp &&
    `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: ${clamp}px;`}
`;
