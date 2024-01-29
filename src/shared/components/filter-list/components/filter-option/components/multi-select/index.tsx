import {Popover} from '@mantine/core';
import React, {useState} from 'react';
import usei18next from 'shared/hooks/use-i18next';
import {SelectDataProps} from 'shared/types';

import {
  Container,
  Input,
  OptionList,
  CheckBox,
  Active,
  Option,
  AddButtom,
  Button,
} from './styles';

type Props = {
  values: SelectDataProps[];
  onChange: (value: SelectDataProps[]) => void;
  options: SelectDataProps[];
  search?: boolean;
  centerValue?: boolean;
  opened: boolean;
  setOpened: (opened: boolean) => void;
  placeholder?: string;
};

const MultiSelect: React.FC<Props> = ({
  onChange,
  values = [],
  options,
  search = false,
  opened,
  setOpened,
}) => {
  const [searchText, setSearch] = useState('');
  const {translate} = usei18next();
  const [localValues, setLocalValues] = useState<SelectDataProps[]>(
    values ?? [],
  );

  const changeLocalValues = (option: SelectDataProps) => {
    const isValue = localValues.find(
      (localValue) => localValue.value === option.value,
    );

    setLocalValues(
      isValue
        ? localValues.filter((localValue) => localValue !== isValue)
        : [...localValues, option],
    );
  };

  const availableOptions = options.filter(
    (option) =>
      option.label.toLocaleLowerCase().search(searchText.toLocaleLowerCase()) >=
      0,
  );

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      zIndex={1001}
      target={
        <Button onClick={() => setOpened(true)} active={opened}>
          {values.map(({label}) => label).join(', ') ?? ''}
        </Button>
      }
      styles={{inner: {padding: 0}}}
      position="bottom"
      placement="start">
      <Container full={search}>
        {search && (
          <Input
            placeholder={translate('filterList:searchPlaceholder')}
            autoFocus
            onChange={(e) => setSearch(e.target.value)}
          />
        )}
        <OptionList>
          {availableOptions.map((option, index) => {
            const active = localValues.find(
              (localValue) => localValue.value === option.value,
            )
              ? true
              : false;

            return (
              <Option
                {...{active}}
                key={index}
                onClick={() => changeLocalValues(option)}>
                <CheckBox {...{active}}>{active && <Active />}</CheckBox>
                {`${option.label}`}
              </Option>
            );
          })}
          <AddButtom onClick={() => onChange(localValues)}>
            {translate('filterList:confirmOptions')}
          </AddButtom>
        </OptionList>
      </Container>
    </Popover>
  );
};

export default MultiSelect;
