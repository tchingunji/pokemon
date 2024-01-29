import React from 'react';
import {Popover} from '@mantine/core';

import {Container, Button, OptionList, Option} from './styles';
import {NumericOperators, Operators} from '../../state';

interface Props {
  value: Operators | NumericOperators;
  onChange: (value: Operators | NumericOperators) => void;
  operatorType: 'string' | 'numeric';
  opened: boolean;
  open: () => void;
  close: () => void;
}

const Select: React.FC<Props> = ({
  onChange,
  value,
  opened,
  operatorType,
  open,
  close,
}) => {
  return (
    <Popover
      {...{opened}}
      onClose={close}
      zIndex={1001}
      target={
        <Button onClick={open} {...{active: opened}}>
          {value}
        </Button>
      }
      styles={{inner: {padding: 0}}}
      position="bottom">
      <Container>
        <OptionList>
          {Object.values(
            operatorType === 'string' ? Operators : NumericOperators,
          ).map((operator, index) => (
            <Option
              className="ignore"
              {...{active: operator === value}}
              key={index}
              onClick={() => onChange(operator)}>
              {value}
            </Option>
          ))}
        </OptionList>
      </Container>
    </Popover>
  );
};

export default Select;
