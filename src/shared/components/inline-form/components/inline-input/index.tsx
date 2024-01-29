import {forwardRef, ForwardRefRenderFunction, InputHTMLAttributes} from 'react';

import {Container, Label, Input} from './styles';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  size: 'full' | 'half';
}

const InlineInput: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {label, size, ...props},
  ref,
) => {
  return (
    <Container {...{size}}>
      <Label>{label}</Label>
      <Input {...{ref, ...props}} />
    </Container>
  );
};

export default forwardRef(InlineInput);
