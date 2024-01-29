import {AsyncThunkAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';

export interface FileProps {
  _id: string;
  key: string;
  url: string;
  mimetype: string;
  name?: string;
}

export interface CreatedByProps {
  date: string;
  user: any;
}

export type RequestPromiseProps = () => AsyncThunkAction<
  AxiosResponse,
  any,
  any
>;

export interface SelectDataProps {
  label: string;
  value: any;
}

export interface KeyValueProps<T = any> {
  [key: string]: T;
}

type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[],
];

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

export type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
        : never;
    }[keyof T]
  : '';

export type Leaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {[K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>>}[keyof T]
  : '';
