import styled from 'styled-components';
import {RiEditBoxLine} from 'react-icons/ri';

export const EditIcon = styled(RiEditBoxLine)`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  padding: 5px;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    color: #228be6;
    transition: all ease-in-out 0.2s;
    background-color: rgba(34, 139, 230, 0.1);
  }
`;
