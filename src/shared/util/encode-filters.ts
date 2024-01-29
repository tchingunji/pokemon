import {
  NumericOperators,
  Operators,
} from 'shared/components/filter-list/components/filter-option/state';

export interface FilterQueryProps {
  [field: string]: {
    operator: Operators | NumericOperators;
    value: any | any[];
  };
}
