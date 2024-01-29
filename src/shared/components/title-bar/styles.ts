import styled from 'styled-components';
import {IoReloadOutline} from 'react-icons/io5';
import Spinner from 'react-spinners/ClipLoader';
import colors from 'shared/assets/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h3`
  font-size: 22px;
  margin: 0;
`;

export const Reload = styled(IoReloadOutline)`
  font-size: 22px;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }
`;

export const Description = styled.p`
  font-size: 12px;
  color: ${colors.gray};

  time {
    font-size: 12px;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Loader = styled(Spinner).attrs({
  size: 18,
  color: colors.primary,
})``;
