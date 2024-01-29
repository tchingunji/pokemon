import {useEffect, useRef, useState} from 'react';
import {SelectDataProps} from 'shared/types';
import {FieldSelectDataProps} from './components/field-select';

export enum Operators {
  Equal = '=',
  NotEqual = '≠',
}

export enum NumericOperators {
  Equal = '=',
  NotEqual = '≠',
  GreaterThanEqual = '>=',
  LessThanEqual = '<=',
}

export interface FilterOptionProps {
  field: string;
  label: string;
  values?: SelectDataProps[];
  centerValue?: boolean;
  type: 'select' | 'multi-select' | 'input';
  valueAsNumber?: boolean;
}

export interface FilterProps {
  field: FieldSelectDataProps;
  operator: Operators | NumericOperators;
  value: any | any[];
}

interface FilterDraftProps extends Omit<FilterProps, 'field' | 'value'> {
  field?: FieldSelectDataProps;
  value?: any | any[];
}

export interface FilterOptionStateProps {
  initialFilter?: FilterProps;
  fieldOptions: FilterOptionProps[];
  remove: () => void;
  confirm: (filter: FilterProps) => void;
}

const useFilterOptionState = ({
  initialFilter,
  fieldOptions,
  confirm,
}: FilterOptionStateProps) => {
  const [showField, setShowField] = useState(!initialFilter);
  const [showOperator, setShowOperator] = useState(false);
  const [showValue, setShowValue] = useState(false);

  const [filter, setFilter] = useState<FilterDraftProps>(
    initialFilter ?? {
      operator: Operators.Equal,
    },
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const selectFieldOptions: FieldSelectDataProps[] = fieldOptions.map(
    (option) => ({
      label: option.label,
      value: option.field,
    }),
  );

  useEffect(() => {
    if (!filter.value) {
      inputRef.current?.focus();
      setShowValue(true);
    }
  }, [filter]);

  const currentFilter = fieldOptions.find(
    (option) => option.field === filter.field?.value,
  );

  const handleChangeField = (field: FieldSelectDataProps) => {
    setShowField(false);
    setFilter((state) => ({...state, field, value: undefined}));

    if (field) setShowValue(true);
  };

  const handleChangeOperator = (operator: NumericOperators | Operators) => {
    setFilter((state) => ({...state, operator}));
    setShowOperator(false);

    const {field, value} = filter;

    if (field && value && operator !== initialFilter?.operator)
      confirm({field, value, operator});
  };

  const handleChangeValue = ({value}: SelectDataProps) => {
    setShowValue(false);
    setFilter((state) => ({...state, value}));

    const {field, operator} = filter;

    if (field && operator && value !== initialFilter?.value)
      confirm({field, operator, value});
  };

  const onBlur = () => {
    if (filter.value && filter.value !== initialFilter?.value)
      confirm(filter as FilterProps);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') inputRef.current?.blur();
  };

  return {
    inputRef,
    filter,
    showField,
    showOperator,
    showValue,
    currentFilter,
    selectFieldOptions,
    setShowField,
    setShowOperator,
    setShowValue,
    setFilter,
    onBlur,
    onKeyDown,
    handleChangeValue,
    handleChangeField,
    handleChangeOperator,
  };
};

export default useFilterOptionState;
