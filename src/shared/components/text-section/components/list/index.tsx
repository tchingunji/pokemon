import React from 'react';
import CircleButton, {CircleButtonProps} from 'shared/components/circle-button';
import usei18next from 'shared/hooks/use-i18next';
import {Container, Label, Value, Values} from './styles';

interface Props {
  label: string;
  values?: string[];
  addButton?: CircleButtonProps;
}

const List: React.FC<Props> = ({label, values, addButton}) => {
  const {translate} = usei18next();

  return (
    <Container>
      <Label>
        {label} {addButton && <CircleButton {...addButton} />}
      </Label>
      <Values>
        {values?.map((value, key) => (
          <Value key={key}>{value}</Value>
        ))}
        {values?.length === 0 && translate('table:empty')}
      </Values>
    </Container>
  );
};

export default List;
