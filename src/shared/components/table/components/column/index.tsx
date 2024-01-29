import React from 'react';
import {ColumnProps, RenderColumnProps} from '../..';
import {Container} from './styles';

interface Props {
  column: ColumnProps | string | RenderColumnProps;
  row: any;
  dataLabel: string;
}

const Column: React.FC<Props> = ({column, row, dataLabel}) => {
  if (typeof column === 'string')
    return <Container data-label={dataLabel}>{row[column] ?? ''}</Container>;

  if (typeof column === 'function') return <Container>{column(row)}</Container>;

  const {value, clamp, permission, visible} = column;

  if (permission) return null;
  if (typeof visible === 'boolean' && !visible) return null;
  if (typeof visible === 'function' && !visible(row)) return null;

  return (
    <Container data-label={dataLabel} {...{clamp}}>
      {typeof value === 'function'
        ? value(row)
        : typeof value === 'string'
        ? (row as any)[value]
        : ''}
    </Container>
  );
};

export default Column;
