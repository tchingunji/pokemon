import React, {useEffect} from 'react';
import {
  Control,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from 'react-hook-form';
import cleanDeep from 'clean-deep';

import {Container} from './styles';
import {getInlineComponent, InputProps} from './util';

interface ExtraComponentProps {
  control: Control;
  register: UseFormRegister<any>;
}

interface Props<T> {
  id?: string;
  inputs?: InputProps<T>[];
  onSubmit?: SubmitHandler<T>;
  defaultValues?: Partial<T>;
  onFormStateChange?: (values: T) => void;
  ExtraComponent?: React.FC<ExtraComponentProps>;
  disabled?: boolean;
}

const InlineForm: <T>(p: Props<T>) => React.ReactElement<T> = ({
  id,
  inputs = [],
  onSubmit,
  defaultValues,
  onFormStateChange,
  ExtraComponent,
  disabled,
}) => {
  const formContext = useForm<any>({
    defaultValues,
  });

  const {register, control, handleSubmit, watch} = formContext;

  const formState = watch();

  useEffect(() => {
    if (onFormStateChange) onFormStateChange(formState);
  }, [formState]);

  return (
    <FormProvider {...formContext}>
      <Container
        {...{id}}
        showForm={inputs.length > 0}
        onSubmit={
          onSubmit &&
          handleSubmit((values) => onSubmit(cleanDeep(values) as any))
        }>
        {inputs.map((input) =>
          getInlineComponent({
            ...input,
            control,
            register,
            disabled: disabled ?? input.disabled,
            formState,
          }),
        )}
      </Container>
      {ExtraComponent && <ExtraComponent {...{control, register}} />}
    </FormProvider>
  );
};

export default InlineForm;
