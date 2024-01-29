import React, {forwardRef, ForwardRefRenderFunction} from 'react';
import {Switch} from '@mantine/core';
import {Control, useController} from 'react-hook-form';

import {Container, Label} from './styles';

interface Props {
  label: string;
  name: string;
  control: Control<any>;
  size: 'full' | 'half';
  disabled?: boolean;
  hidden?: boolean;
}

const InlineSwitch: ForwardRefRenderFunction<any, Props> = (
  {label, name, control, size, disabled, hidden},
  ref,
) => {
  const {field} = useController({control: control, name});

  const handleOnSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    !disabled && field.onChange(event);
  };

  if (hidden) return null;
  return (
    <Container {...{size, ref, disabled}}>
      <Label>{label}</Label>
      <Switch onChange={handleOnSwitchChange} checked={field.value ?? false} />
    </Container>
  );
};

export default forwardRef(InlineSwitch);
