import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useRef,
  useState,
} from 'react';

import {Control, useController} from 'react-hook-form';
import RemoveIconButton from 'shared/components/remove-icon-button';

import {Container, Label, Input, HiddenInput, Link, FileHolder} from './styles';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  control: Control<any>;
  size: 'full' | 'half';
  disabled?: boolean;
}

const InlineDatePicker: ForwardRefRenderFunction<any, Props> = (
  {label, name, control, size, disabled},
  ref,
) => {
  const {field} = useController({control: control, name});
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | string | undefined>(field.value);

  const handleChange = (file: File) => {
    field.onChange(file);
    setFile(file);
  };

  const onClick = () => {
    !disabled && inputRef.current?.click();
  };

  const removeFile = () => {
    field.onChange(undefined);
    setFile(undefined);
  };

  return (
    <Container {...{size, ref, disabled}}>
      <Label>{label}</Label>
      {!file && <Input {...{onClick, disabled}}>Adicionar arquivo</Input>}
      {file && (
        <FileHolder>
          <Link
            href={typeof file === 'string' ? file : URL.createObjectURL(file)}
            target="_blank"
            rel="noreferrer">
            file.pdf
          </Link>

          {!disabled && <RemoveIconButton onClick={removeFile} />}
        </FileHolder>
      )}
      {!file && (
        <HiddenInput
          ref={inputRef}
          onChange={({target}) => target.files && handleChange(target.files[0])}
        />
      )}
    </Container>
  );
};

export default forwardRef(InlineDatePicker);
