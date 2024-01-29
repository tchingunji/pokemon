import styled from 'styled-components';
import colors from 'shared/assets/colors';
import Spinner from 'react-spinners/ClipLoader';

export const Container = styled.button`
  width: fit-content;
  padding: 5px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${colors.primary};
  color: ${colors.white};
  display: flex;
  align-items: center;
  gap: 5px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.8);
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled(Spinner).attrs({
  size: 16,
  color: colors.white,
})``;
