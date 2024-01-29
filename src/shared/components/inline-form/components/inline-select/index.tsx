import React, {forwardRef, ForwardRefRenderFunction} from 'react';
import {Control, useController} from 'react-hook-form';

import {Container, Label, Select} from './styles';

export interface DataProps {
  label: string;
  value: string;
}

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  data: DataProps[];
  control: Control<any>;
  size: 'full' | 'half';
  valueAsNumber?: boolean;
  hidden?: boolean;
}

const InlineSelect: ForwardRefRenderFunction<any, Props> = (
  {label, name, control, size, valueAsNumber, data, hidden, ...props},
  ref,
) => {
  const {field} = useController({control: control, name});

  if (hidden) return null;
  return (
    <Container {...{size, ref}}>
      <Label>{label}</Label>
      <Select
        {...props}
        data={data.map(({label, value}) => ({
          label: `${label}`,
          value: `${value}`,
        }))}
        searchable
        value={`${field.value}`}
        onChange={(value) =>
          value && field.onChange(valueAsNumber ? +value : value)
        }
        hidden={hidden}
        zIndex={1500}
        clearable
      />
    </Container>
  );
};

export default forwardRef(InlineSelect);
