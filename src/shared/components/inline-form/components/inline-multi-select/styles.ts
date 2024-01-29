import colors from 'shared/assets/colors';
import styled from 'styled-components';
import {MultiSelect as MantineMultiSelect} from '@mantine/core';

interface Props {
  focus: boolean;
  size: 'full' | 'half';
}

export const Container = styled.div<Props>`
  width: ${(props) => (props.size === 'full' ? 100 : 50)}%;
  padding: 10px 15px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 10px;

  .input {
    height: 100%;
    border: 3px solid
      ${(props) => (props.focus ? colors.softBorder : colors.white)};
    outline: none;
    border-radius: 3px;

    display: flex;
    align-items: center;
  }

  @media (max-width: 975px) {
    min-width: fit-content;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0;
  }
`;

export const Label = styled.label`
  min-width: 200px;
  color: ${colors.darkGray};
  font-weight: 500;

  @media (max-width: 975px) {
    min-width: fit-content;
  }
`;

export const MultiSelect = styled(MantineMultiSelect).attrs({
  styles: {
    root: {width: '100%'},
    wrapper: {minHeight: 43},
    rightSection: {display: 'none'},
    selected: {backgroundColor: colors.primaryLight, color: colors.primary},
    values: {width: '100%'},
  },
  classNames: {input: 'input'},
})``;
