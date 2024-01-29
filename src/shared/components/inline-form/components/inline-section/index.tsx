import React, {forwardRef, ForwardRefRenderFunction} from 'react';

import {Container, Label} from './styles';

interface Props {
  label: string;
  size: 'full' | 'half';
}

const InlineSection: ForwardRefRenderFunction<any, Props> = (
  {label, size},
  ref,
) => {
  return (
    <Container {...{size, ref}}>
      <Label>{label}</Label>
    </Container>
  );
};

export default forwardRef(InlineSection);
