import React, {useState} from 'react';
import {Popover} from '@mantine/core';
import usei18next from 'shared/hooks/use-i18next';

import {Container, Input, Button, OptionList, Option} from './styles';
import {SelectDataProps} from 'shared/types';

interface Props {
  value?: string;
  onChange: (value: SelectDataProps) => void;
  options: SelectDataProps[];
  search?: boolean;
  centerValue?: boolean;
  opened: boolean;
  setOpened: (opened: boolean) => void;
  placement?: 'center' | 'start' | 'end';
}

const Select: React.FC<Props> = ({
  onChange,
  value,
  options,
  search = false,
  centerValue = false,
  opened,
  setOpened,
  placement = 'start',
}) => {
  const [searchText, setSearch] = useState('');
  const {translate} = usei18next();

  const availableOptions = options.filter(
    (option) =>
      option.label.toLocaleLowerCase().search(searchText.toLocaleLowerCase()) >=
      0,
  );

  const label = options.find((option) => option.value === value)?.label;

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      zIndex={1001}
      target={
        <Button onClick={() => setOpened(true)} active={opened}>
          {label}
        </Button>
      }
      styles={{inner: {padding: 0}}}
      position="bottom"
      {...{placement}}>
      <Container full={search}>
        {search && (
          <Input
            placeholder={translate('filterList:searchPlaceholder')}
            autoFocus
            onChange={(e) => setSearch(e.target.value)}
          />
        )}
        <OptionList>
          {availableOptions.map((option, index) => (
            <Option
              className="ignore"
              {...{centerValue, active: value === option.value}}
              key={index}
              onClick={() => onChange(option)}>
              {option?.label}
            </Option>
          ))}
        </OptionList>
      </Container>
    </Popover>
  );
};

export default Select;
