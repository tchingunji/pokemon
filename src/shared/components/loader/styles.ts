import styled from 'styled-components';
import Spinner from 'react-spinners/ClipLoader';
import colors from 'shared/assets/colors';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled(Spinner).attrs({
  size: 18,
  color: colors.primary,
})``;
