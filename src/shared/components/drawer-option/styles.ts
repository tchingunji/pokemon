import styled from 'styled-components';
import {Link} from 'react-router-dom';
import colors from 'shared/assets/colors';

interface OptionProps {
  active?: number;
}

interface ButtonProps {
  opened?: boolean;
}

export const Container = styled.div`
  .collapse-css-transition {
    transition: height 280ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Button = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  > svg {
    transition: all 280ms ease-in-out;
    transform: ${(props) => props.opened && 'rotate(-180deg)'};
  }

  &:hover {
    background-color: ${colors.primaryLight};
  }
`;

export const LinkButton = styled(Link)<ButtonProps>`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  > svg {
    transition: all 280ms ease-in-out;
    transform: ${(props) => props.opened && 'rotate(-180deg)'};
  }

  &:hover {
    background-color: ${colors.primaryLight};
  }
`;

export const Label = styled.div<OptionProps>`
  border-radius: 5px;
  display: flex;
  flex: 1;
  gap: 10px;
  align-items: center;
  color: ${(props) => (props.active ? colors.primary : colors.darkGray)};

  svg {
    font-size: 20px;
    color: ${colors.primary};
  }
`;

export const Option = styled(Link)<OptionProps>`
  display: block;
  color: ${(props) => (props.active ? colors.primary : colors.darkGray)};
  padding: 10px 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.active ? colors.primaryLight : colors.white};
  border-right: 3px solid
    ${(props) => (props.active ? colors.primary : colors.white)};

  &:hover {
    background-color: ${(props) =>
      props.active ? colors.primaryLight : colors.softGray};
  }
`;
