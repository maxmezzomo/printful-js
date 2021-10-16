import { Address, Item } from './common';
import { RequireOnly } from './util';

export type ShippingInfo = {
  readonly id: string;
  readonly name: string;
  readonly rate: string;
  readonly currency: string;
  readonly minDeliveryDays: number;
  readonly maxDeliveryDays: number;
};

type AddressInfo = RequireOnly<
  Pick<
    Address,
    'address1' | 'city' | 'country_code' | 'state_code' | 'zip' | 'phone'
  >,
  'address1' | 'city' | 'country_code'
>;

type ItemInfo = RequireOnly<
  Pick<
    Item,
    | 'variant_id'
    | 'external_variant_id'
    | 'warehouse_product_variant_id'
    | 'quantity'
  > & { readonly value: string },
  'quantity'
>;

export type ShippingRequest = {
  readonly recipient: AddressInfo;
  readonly items: readonly ItemInfo[];
  readonly currency: string;
  readonly locale: string;
};
