import {Popover} from '@mantine/core';
import React, {useState} from 'react';
import usei18next from 'shared/hooks/use-i18next';
import {HiPencil} from 'react-icons/hi';

import {
  Container,
  Input,
  OptionList,
  CheckBox,
  Active,
  Option,
  AddButtom,
} from './styles';
import IconButton from 'shared/components/icon-button';
import {ExtractProjectionKey} from '../..';

export interface SelectOptionProps {
  label?: string;
  value: string;
  translate?: boolean;
}

const isSelectOptionProps = (object: any): object is SelectOptionProps => {
  return !!object.label || !!object.value;
};

type Props = {
  values?: ExtractProjectionKey<any>[];
  onChange?: (value: any[]) => void;
  options: (string | SelectOptionProps)[];
  centerValue?: boolean;
  placeholder?: string;
  translationKey: string;
};

const ProjectionSelect: React.FC<Props> = ({
  onChange,
  values = [],
  options,
  translationKey,
}) => {
  const [opened, setOpened] = useState(false);
  const [searchText, setSearch] = useState('');
  const {translate} = usei18next();
  const [localValues, setLocalValues] = useState<string[]>(values ?? []);

  const getValue = (option: string | SelectOptionProps) =>
    isSelectOptionProps(option) ? option.value : option;

  const getLabel = (option: string | SelectOptionProps) =>
    translate(
      isSelectOptionProps(option)
        ? option.translate !== false
          ? (`${translationKey}.${option.label ?? option.value}` as any)
          : option.label ?? option.value
        : (`${translationKey}.${option}` as any),
    );

  const changeLocalValues = (option: string) => {
    const isValue = localValues.find((localValue) => localValue === option);

    setLocalValues(
      isValue
        ? localValues.filter((localValue) => localValue !== isValue)
        : [...localValues, option],
    );
  };

  const submitValues = () => {
    if (onChange) onChange(localValues);
    setOpened(false);
  };

  const availableOptions = options.filter(
    (option) =>
      getLabel(option)
        .toLocaleLowerCase()
        .search(searchText.toLocaleLowerCase()) >= 0,
  );

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      zIndex={1001}
      target={
        <IconButton
          icon={<HiPencil />}
          label={'Editar coluna'}
          onClick={() => setOpened(true)}
        />
      }
      styles={{inner: {padding: 0}}}
      position="bottom"
      placement="start">
      <Container full>
        <Input
          placeholder={translate('filterList:searchPlaceholder')}
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />
        <OptionList>
          {availableOptions.map((option, index) => {
            const active = localValues.find(
              (localValue) => localValue === getValue(option),
            )
              ? true
              : false;

            return (
              <Option
                {...{active}}
                key={index}
                onClick={() => changeLocalValues(getValue(option))}>
                <CheckBox {...{active}}>{active && <Active />}</CheckBox>
                {getLabel(option)}
              </Option>
            );
          })}
          <AddButtom onClick={submitValues}>{'Salvar'}</AddButtom>
        </OptionList>
      </Container>
    </Popover>
  );
};

export default ProjectionSelect;
