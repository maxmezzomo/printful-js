import { Address } from './common';

export type TaxInfo = {
  readonly required: boolean;
  readonly rate: number;
};

type TaxAddressInfo = Pick<
  Address,
  'country_code' | 'state_code' | 'city' | 'zip'
>;

export type TaxRequest = {
  readonly recipient: TaxAddressInfo;
};
