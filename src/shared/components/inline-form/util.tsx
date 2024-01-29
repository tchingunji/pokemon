import {DataProps} from './components/inline-select';

import {Control, UseFormRegister} from 'react-hook-form';
import {
  InlineCode,
  InlineDatePicker,
  InlineFilePicker,
  InlineImagePicker,
  InlineInput,
  InlineMultiSelect,
  InlineSection,
  InlineSelect,
  InlineSwitch,
} from './components';

export type InputModes =
  | 'date-picker'
  | 'switch'
  | 'select'
  | 'input'
  | 'image-picker'
  | 'file-picker'
  | 'multi-select'
  | 'section'
  | 'code';

export interface InputProps<T> {
  mode: InputModes;
  name: keyof T;
  label: string;
  placeholder?: string;
  data?: DataProps[];
  type?: 'text' | 'password' | 'number' | 'time' | 'email';
  valueAsNumber?: boolean;
  size?: 'full' | 'half';
  disabled?: boolean;
  format?: string;
  hidden?: boolean | ((row: T) => boolean);
}

interface Props extends InputProps<any> {
  control: Control;
  register: UseFormRegister<any>;
  key?: string;
  formState: any;
}

const inlineComponents = {
  input: InlineInput,
  section: InlineSection,
  switch: InlineSwitch,
  select: InlineSelect,
  'multi-select': InlineMultiSelect,
  'date-picker': InlineDatePicker,
  'image-picker': InlineImagePicker,
  'file-picker': InlineFilePicker,
  code: InlineCode,
};

export const getInlineComponent = ({
  mode,
  data = [],
  register,
  size = 'full',
  valueAsNumber,
  hidden,
  formState,
  ...input
}: Props) => {
  const name = input.name as string;
  const InlineComponent = inlineComponents[mode];
  if (valueAsNumber) input.type = 'number';
  if (!input.key) input.key = name;

  return (
    <InlineComponent
      hidden={typeof hidden === 'function' ? hidden(formState) : hidden}
      {...{
        ...input,
        ...register(name, {valueAsNumber}),
        size,
        data,
        valueAsNumber,
      }}
    />
  );
};
