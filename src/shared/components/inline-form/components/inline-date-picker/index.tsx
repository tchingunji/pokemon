import React, {forwardRef, ForwardRefRenderFunction, useState} from 'react';
import {Popover} from '@mantine/core';
import DatePicker from 'shared/components/data-picker';

import {Container, Label, Input} from './styles';
import dateFnsService from 'shared/services/date-fns-service';
import {Control, useController} from 'react-hook-form';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  control: Control<any>;
  size: 'full' | 'half';
  format?: string;
  disabled?: boolean;
}

const InlineDatePicker: ForwardRefRenderFunction<any, Props> = (
  {label, placeholder, name, control, size, format, disabled},
  ref,
) => {
  const [opened, setOpened] = useState(false);
  const {field} = useController({control: control, name});

  const handleDateChange = (date: Date) => {
    setOpened(false);
    field.onChange(format ? dateFnsService.format(date, format) : date);
  };

  const getDate = () => {
    if (!field.value) return '';
    if (format)
      return dateFnsService.dateFormat(
        dateFnsService.isStringDate(field.value)
          ? field.value
          : dateFnsService.parse(field.value, format),
      );
    if (dateFnsService.isStringDate(field.value))
      return dateFnsService.dateFormat(field.value);
    return '';
  };

  return (
    <Container {...{size, ref, disabled}}>
      <Label>{label}</Label>
      <Popover
        {...{opened}}
        placement="start"
        position="bottom"
        onClose={() => setOpened(false)}
        styles={{inner: {padding: 0}}}
        target={
          <Input
            onClick={() => !disabled && setOpened(true)}
            disabled={disabled}
            {...{opened}}
            placeholder={placeholder}
            value={getDate()}
            readOnly
          />
        }>
        <DatePicker confirm={handleDateChange} />
      </Popover>
    </Container>
  );
};

export default forwardRef(InlineDatePicker);
