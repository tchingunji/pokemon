import React from 'react';

import {Container, Input, Remove} from './styles';
import {FieldSelect, Select, OperatorsSelect} from './components';
import useFilterOptionState, {FilterOptionStateProps} from './state';

const FilterOption: React.FC<FilterOptionStateProps> = (props) => {
  const {
    inputRef,
    filter,
    showField,
    showOperator,
    showValue,
    currentFilter,
    setShowField,
    setShowOperator,
    setShowValue,
    setFilter,
    onBlur,
    onKeyDown,
    handleChangeValue,
    handleChangeField,
    handleChangeOperator,
    selectFieldOptions,
  } = useFilterOptionState(props);

  return (
    <Container>
      <FieldSelect
        value={filter.field}
        opened={showField}
        open={() => setShowField(true)}
        close={() => setShowField(false)}
        onChange={handleChangeField}
        fields={selectFieldOptions}
      />
      {filter.field && (
        <OperatorsSelect
          value={filter.operator}
          opened={showOperator}
          onChange={handleChangeOperator}
          open={() => setShowOperator(true)}
          close={() => setShowOperator(false)}
          operatorType={currentFilter?.valueAsNumber ? 'numeric' : 'string'}
        />
      )}
      {filter.field && currentFilter?.type === 'select' && (
        <Select
          {...{value: filter.value}}
          opened={showValue}
          setOpened={setShowValue}
          onChange={handleChangeValue}
          options={currentFilter.values ?? []}
        />
      )}
      {/* {filter.field &&
        typeof currentFilter !== 'string' &&
        currentFilter?.type === 'multi-select' && (
          <MultiSelect
            {...{values: filter.value}}
            opened={showValue}
            setOpened={setShowValue}
            onChange={handleChangeValue}
            options={currentFilter.values ?? []}
          />
        )} */}
      {filter.field && currentFilter?.type === 'input' && (
        <Input
          ref={inputRef}
          {...{
            value: filter.value ?? '',
            onChange: (e) =>
              setFilter((state) => ({
                ...state,
                value: currentFilter.valueAsNumber
                  ? +e.target.value
                  : e.target.value,
              })),
          }}
          {...{onKeyDown, onBlur}}
        />
      )}
      <Remove onClick={props.remove} />
    </Container>
  );
};

export default FilterOption;
