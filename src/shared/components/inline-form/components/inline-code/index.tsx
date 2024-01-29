import {forwardRef, ForwardRefRenderFunction} from 'react';
import {Control, useController} from 'react-hook-form';

import {Container, Label, Code} from './styles';

interface Props {
  name: string;
  label: string;
  size: 'full' | 'half';
  control: Control<any>;
}

const InlineCode: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {label, size, control, name},
  ref,
) => {
  const {field} = useController({control, name});
  return (
    <Container {...{size}}>
      <Label>{label}</Label>
      <Code block {...{ref}}>
        {JSON.stringify(field.value, null, 2)}
      </Code>
    </Container>
  );
};

export default forwardRef(InlineCode);
