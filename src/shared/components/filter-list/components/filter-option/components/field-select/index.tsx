import React, {useState} from 'react';
import {Popover} from '@mantine/core';
import usei18next from 'shared/hooks/use-i18next';

import {Container, Input, Button, OptionList, Option} from './styles';

export interface FieldSelectDataProps {
  value: string;
  label: string;
}

interface Props {
  value?: FieldSelectDataProps;
  onChange: (value: FieldSelectDataProps) => void;
  fields: FieldSelectDataProps[];
  opened: boolean;
  open: () => void;
  close: () => void;
}

const FieldSelect: React.FC<Props> = ({
  onChange,
  value,
  fields,
  opened,
  open,
  close,
}) => {
  const [searchText, setSearch] = useState('');
  const {translate} = usei18next();

  const availableOptions = fields.filter(
    (option) =>
      option.label.toLocaleLowerCase().search(searchText.toLocaleLowerCase()) >=
      0,
  );

  return (
    <Popover
      opened={opened}
      onClose={close}
      zIndex={1001}
      placement="start"
      target={
        <Button onClick={open} active={opened}>
          {value?.label ?? translate('filterList:placeholder')}
        </Button>
      }
      styles={{inner: {padding: 0}}}
      position="bottom">
      <Container>
        <Input
          placeholder={translate('filterList:searchPlaceholder')}
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />
        <OptionList>
          {availableOptions.map((option, index) => (
            <Option
              className="ignore"
              {...{active: value?.value === option.value}}
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

export default FieldSelect;
