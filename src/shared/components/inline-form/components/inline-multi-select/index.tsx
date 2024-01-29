import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useState,
} from 'react';
import {Control, useController} from 'react-hook-form';

import {Container, Label, MultiSelect} from './styles';

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
}

const InlineMultiSelect: ForwardRefRenderFunction<any, Props> = (
  {label, name, control, size, data, placeholder},
  ref,
) => {
  const {field} = useController({control: control, name});
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const filteredItems = data?.reduce((items, {value}) => {
      const isItem = field.value?.find((item: string) => value === item);

      if (isItem) return [...items, value];
      return items;
    }, [] as string[]);

    field.onChange(filteredItems);
  }, [data]);

  return (
    <Container {...{focus, size}} {...{ref}}>
      <Label>{label}</Label>
      <MultiSelect
        name={name}
        data={data}
        placeholder={placeholder}
        clearButtonLabel={label}
        transitionDuration={200}
        transition="pop-top-left"
        transitionTimingFunction="ease"
        clearable
        searchable
        value={field.value}
        onChange={field.onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        zIndex={1500}
      />
    </Container>
  );
};
export default forwardRef(InlineMultiSelect);
