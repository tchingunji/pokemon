import styled from 'styled-components';
import colors from 'shared/assets/colors';
import Spinner from 'react-spinners/ClipLoader';

export const Container = styled.button`
  width: fit-content;
  padding: 10px;
  font-size: 12px;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  background-color: ${colors.softGray};
  color: ${colors.darkGray};
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: ${colors.primaryLight};
  }
`;

export const Loader = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`;

export const Loading = styled(Spinner).attrs({
  size: 18,
  color: colors.white,
})``;
