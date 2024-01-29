import React, {useState, useRef, InputHTMLAttributes} from 'react';

import {Container, Label, TextInput} from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<Props> = ({label, onChange, ...props}) => {
  const [isFocused, setFocused] = useState(false);
  const [length, setLength] = useState(String(props.value ?? '').length ?? 0);

  return (
    <Container>
      <Label {...{isFocused: isFocused || !!length}}>{label}</Label>
      <TextInput
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => {
          setLength(e.target.value.length);
          if (onChange) onChange(e);
        }}
      />
    </Container>
  );
};

export default Input;
