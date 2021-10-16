import {
  Address,
  Costs,
  GiftData,
  IncompleteItem,
  Item,
  OrderPackingSlip,
  Shipment,
  Timestamp,
} from './common';
import { RequireOnly } from './util';

type PricingBreakdown = readonly number[];

export type Order = {
  readonly id: number;
  readonly external_id: string;
  readonly store: number;
  readonly status: string;
  readonly shipping: string;
  readonly created: Timestamp;
  readonly updated: Timestamp;
  readonly recipient: Address;
  readonly items: readonly Item[];
  readonly incomplete_items: readonly IncompleteItem[];
  readonly costs: Costs;
  readonly retail_costs: Costs;
  readonly pricing_breakdown: PricingBreakdown;
  readonly shipments: readonly Shipment[];
  readonly gift: GiftData;
  readonly packing_slip: OrderPackingSlip;
};

export type OrderInput = RequireOnly<
  Pick<
    Order,
    | 'external_id'
    | 'shipping'
    | 'recipient'
    | 'items'
    | 'retail_costs'
    | 'gift'
    | 'packing_slip'
  >,
  'recipient' | 'items'
>;

export type OrderCosts = {
  readonly costs: Costs;
  readonly retail_costs: Costs;
};
