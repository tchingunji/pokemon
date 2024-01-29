import styled from 'styled-components';
import {IoTrashBinOutline} from 'react-icons/io5';
import colors from 'shared/assets/colors';

export const IconButton = styled(IoTrashBinOutline)`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  padding: 5px;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    color: ${colors.red};
    transition: all ease-in-out 0.2s;
    background-color: ${colors.redSoft};
  }
`;
