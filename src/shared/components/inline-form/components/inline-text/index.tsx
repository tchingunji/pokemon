import {forwardRef, ForwardRefRenderFunction, InputHTMLAttributes} from 'react';

import {Container, Label, Input} from './styles';

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value'> {
  label: string;
  size: 'full' | 'half';
  value: string | React.ReactNode;
}

const InlineText: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {label, size, value},
  ref,
) => {
  return (
    <Container {...{size}}>
      <Label>{label}</Label>
      <Input {...{ref}}>{value}</Input>
    </Container>
  );
};

export default forwardRef(InlineText);
