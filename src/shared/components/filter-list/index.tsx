import React, {useState} from 'react';
import usei18next from 'shared/hooks/use-i18next';
import {FilterQueryProps} from 'shared/util/encode-filters';
import AddButton from '../add-button';

import {FilterOption} from './components';
import {FilterOptionProps, FilterProps} from './components/filter-option/state';

import {Container, Title} from './styles';

interface Props {
  filters: FilterQueryProps;
  filterOptions: FilterOptionProps[];
  onChange: (filters: FilterQueryProps) => void;
  borderless?: boolean;
}

const FilterList: React.FC<Props> = ({
  filters,
  onChange,
  filterOptions,
  borderless = false,
}) => {
  const [newFilter, showNewFilter] = useState(false);
  const {translate} = usei18next();

  const createFilter = ({field, operator, value}: FilterProps) => {
    showNewFilter(false);
    onChange({...filters, [field.value]: {operator, value}});
  };

  const removeFilter = (field: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {[field]: _, ...rest} = filters;
    onChange(rest);
  };

  const getFilter = (field: string): FilterProps => {
    const option = filterOptions.find((option) => option.field === field)!;

    const {operator, value} = filters[field];

    return {
      field: {label: option.label, value: option.field},
      operator,
      value,
    };
  };

  return (
    <Container {...{borderless}}>
      <Title>{translate('filterList:title')}</Title>
      {Object.keys(filters).map((field) => (
        <FilterOption
          key={field}
          {...{
            confirm: createFilter,
            remove: () => removeFilter(field),
            fieldOptions: filterOptions,
            initialFilter: getFilter(field),
          }}
        />
      ))}
      {newFilter && (
        <FilterOption
          remove={() => showNewFilter(false)}
          confirm={createFilter}
          {...{
            fieldOptions: filterOptions,
            selectedFields: Object.keys(filters),
          }}
        />
      )}
      {Object.keys(filters).length !== filterOptions.length && !newFilter && (
        <AddButton onClick={() => showNewFilter(true)} />
      )}
    </Container>
  );
};

export default FilterList;
