import React from 'react';
import {SiMicrosoftexcel} from 'react-icons/si';
import {SelectDataProps} from 'shared/types';
import {FilterQueryProps} from 'shared/util/encode-filters';
import Button from '../button';
import FilterList from '../filter-list';
import {FilterOptionProps} from '../filter-list/components/filter-option/state';
import IconButton from '../icon-button';
import {Column, ProjectionSelect} from './components';
import useTableState from './state';

import {
  BaseTable,
  Container,
  EmptyColumn,
  HeaderColumn,
  HeaderRow,
  Info,
  InfoRow,
  Loader,
  LoaderContainer,
  Row,
  TableBody,
  TableHeader,
  ToolBar,
} from './styles';

export interface PaginationProps {
  onLoadMore: () => Promise<any>;
  loading: boolean;
  isLastPage: boolean;
  count?: number;
}

export type RenderColumnProps<T = any> = (data: T) => React.ReactNode | string;

export type ColumnProps<T = any> = {
  value?: RenderColumnProps<T>;
  visible?: (data: T) => boolean | boolean;
  permission?: string;
  clamp?: number;
};

export type ProjectionOptionProps<T = any> = {
  label?: string;
  value?: Extract<keyof T, string>;
  translate?: boolean;
  column?: ColumnProps<T> | RenderColumnProps<T>;
  filterKey?: string;
  filter?: {
    values?: SelectDataProps[];
    centerValue?: boolean;
    type: 'select' | 'multi-select' | 'input';
    valueAsNumber?: boolean;
  };
};

export type ExtractProjectionKey<T> = Extract<keyof T, string>;

export interface ProjectionProps<T = any> {
  options: (ExtractProjectionKey<T> | ProjectionOptionProps<T>)[];
  values?: string[];
  onChange?: (value: ExtractProjectionKey<T>[]) => void;
  translationKey: string;
  filter?: {
    onChange: (filters: FilterQueryProps) => void;
    filters: FilterQueryProps;
  };
}

interface TableProps<T> {
  data: T[];
  loading?: boolean;
  onRowClick?: (row: T) => void;
  pagination?: PaginationProps;
  exportData?: boolean;
  projection: ProjectionProps<T>;
  module?: string;
  fetchFilters?: string[];
}

const Table: <T>(p: TableProps<T>) => React.ReactElement<T> = ({
  data,
  loading,
  onRowClick,
  pagination,
  exportData,
  projection,
  module,
  fetchFilters,
}) => {
  const {loadingExportData, translate, handleExportData, filters} =
    useTableState({
      exportData,
      projection,
      module,
      fetchFilters,
    });

  const getHeaderLabel = (option: ProjectionOptionProps | string) => {
    if (typeof option === 'string')
      return translate(`${projection.translationKey}.${option}` as any);

    if (option.translate !== false)
      return translate(
        `${projection.translationKey}.${option.label ?? option.value}` as any,
      );
    return option.label ?? option.value;
  };

  const getProjectionOption = (projectionKey: string) =>
    projection.options.find(
      (option) =>
        (typeof option === 'string' ? option : option.value) === projectionKey,
    )!;

  const getColumnFromOption = (option: ProjectionOptionProps | string) =>
    typeof option === 'string'
      ? option
      : option.column
      ? option.column
      : option.value!;

  const resolvePath = (object: any, path: string) =>
    path?.split('.').reduce((o, p) => (o ? o[p] : undefined), object);

  const filterOptions: FilterOptionProps[] = projection?.options.map(
    (option: ProjectionOptionProps | string) => {
      const label = getHeaderLabel(option);
      const field = typeof option === 'string' ? option : option.value!;
      const filterKey =
        typeof option === 'string' ? undefined : option.filterKey;
      const type =
        typeof option !== 'string' ? option.filter?.type ?? 'input' : 'input';
      let filter = (
        typeof option === 'object' ? option.filter ?? {} : {}
      ) as ProjectionOptionProps['filter'];

      const values = resolvePath(filters, field);

      if (filters && values) filter = {...filter, values, type: 'select'};

      return {label, field: filterKey ?? field, type, ...filter};
    },
  );

  return (
    <>
      {projection?.filter && (
        <FilterList
          {...{
            filterOptions,
            ...projection.filter,
          }}
        />
      )}
      <Container>
        <InfoRow>
          {!loading && pagination && data.length > 0 && (
            <Info defaultValue={'row'}>
              {translate('table:showing') +
                data.length +
                translate('table:resultTotal') +
                pagination?.count +
                translate('table:occurrence')}
            </Info>
          )}
          <ToolBar>
            {exportData && projection && module && (
              <IconButton
                {...{
                  icon: <SiMicrosoftexcel />,
                  label: translate('table:export'),
                  loading: loadingExportData,
                  onClick: handleExportData,
                }}
              />
            )}
            {projection?.values && projection.onChange && (
              /* @ts-ignore */
              <ProjectionSelect {...projection} />
            )}
          </ToolBar>
        </InfoRow>
        <BaseTable>
          <TableHeader>
            <HeaderRow>
              {projection?.values &&
                projection.values
                  .filter((value) => getProjectionOption(value))
                  .map((value, index) => (
                    <HeaderColumn key={index}>
                      {getHeaderLabel(getProjectionOption(value))}
                    </HeaderColumn>
                  ))}
              {!projection?.values &&
                projection.options.map((option, index) => (
                  <HeaderColumn key={index}>
                    {getHeaderLabel(option)}
                  </HeaderColumn>
                ))}
            </HeaderRow>
          </TableHeader>
          <TableBody>
            {!loading &&
              data.length > 0 &&
              data.map((row, index) => (
                <Row key={index} onClick={() => onRowClick && onRowClick(row)}>
                  {projection?.values &&
                    projection.values
                      .filter((value) => getProjectionOption(value))
                      .map((value, i) => {
                        const option = getProjectionOption(value);
                        return (
                          <Column
                            key={i}
                            dataLabel={getHeaderLabel(option)}
                            {...{column: getColumnFromOption(option), row}}
                          />
                        );
                      })}
                  {!projection?.values &&
                    projection.options.map((option, index) => (
                      <Column
                        key={index}
                        dataLabel={getHeaderLabel(option)}
                        {...{column: getColumnFromOption(option), row}}
                      />
                    ))}
                </Row>
              ))}
            {!loading && data.length === 0 && (
              <Row>
                <EmptyColumn>{translate('table:empty')}</EmptyColumn>
              </Row>
            )}
            {loading && (
              <Row>
                <LoaderContainer>
                  <Loader />
                </LoaderContainer>
              </Row>
            )}
          </TableBody>
        </BaseTable>

        {!loading && pagination && !pagination.isLastPage && (
          <Container>
            <Info defaultValue={'column'}>
              {translate('table:showing') +
                data.length +
                translate('table:resultTotal') +
                pagination?.count +
                translate('table:occurrence')}
            </Info>
            <Button
              title={translate('table:loadMore')}
              widthMode="fit-content"
              size="small"
              onClick={pagination.onLoadMore}
              loading={pagination.loading}
            />
          </Container>
        )}
      </Container>
    </>
  );
};

export default Table;
