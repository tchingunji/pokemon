import colors from 'shared/assets/colors';
import styled from 'styled-components';

interface Props {
  showForm?: boolean;
}

export const Container = styled.form<Props>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid ${colors.softBorder};
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  ${(props) => !props.showForm && `display: none;`}

  & > div {
    border-bottom: 1px solid ${colors.softBorder};

    &:last-child {
      border-bottom: none;
    }
  }
`;
