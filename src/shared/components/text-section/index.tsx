import React from 'react';
import {CircleButtonProps} from '../circle-button';
import {KeyValue, Title, List, Link} from './components';

import {Container} from './styles';

export interface SectionProps<T> {
  label: string;
  value?: keyof T | ((values: T) => string | React.ReactNode);
  values?: keyof T | ((values: T) => string[] | undefined);
  addButton?: CircleButtonProps;
  visible?: keyof T | ((values: T) => boolean);
  mode?: 'key-value' | 'title' | 'list' | 'link';
}

interface Props<T> {
  rows?: SectionProps<T>[];
  values: T;
}

const TextSection: <T>(p: Props<T>) => React.ReactElement<T> = ({
  rows = [],
  values,
}) => {
  return (
    <Container>
      {rows
        .filter((row) => row)
        .filter(({visible = () => true}) => (visible as any)(values))
        .map(({value, mode = 'key-value', ...props}, index) =>
          mode === 'title' ? (
            <Title key={index} {...props} />
          ) : mode === 'link' ? (
            <Link
              {...{
                ...props,
                value:
                  typeof value === 'function'
                    ? (value as any)(values)
                    : (values as any)[value],
              }}
            />
          ) : mode === 'list' ? (
            <List
              {...{
                ...props,
                values: (props.values as any)(values),
              }}
            />
          ) : (
            <KeyValue
              key={index}
              {...{
                ...props,
                value:
                  typeof value === 'function'
                    ? (value as any)(values)
                    : (values as any)[value],
              }}
            />
          ),
        )}
    </Container>
  );
};

export default TextSection;
