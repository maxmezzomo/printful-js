//has requirements on warehouse_products

import { WarehouseProductVariant } from './warehouse_products';

type WarehouseShipmentStatus =
  | 'shipped'
  | 'delivered'
  | 'received'
  | 'processed'
  | 'canceled'
  | 'failed'
  | 'draft';

type WarehouseShipmentItem = {
  readonly quantity: number;
  readonly variant: WarehouseProductVariant;
};

export type WarehouseShipment = {
  readonly id: number;
  readonly location: string;
  readonly status: WarehouseShipmentStatus;
  readonly tracking_number: string;
  readonly carrier: string;
  readonly items: readonly WarehouseShipmentItem[];
};

type WarehouseShipmentItemCreate = {
  readonly quantity: number;
  readonly variant_id: number;
};

export type WarehouseShipmentCreate = {
  readonly id: number;
  readonly location_id: string;
  readonly tracking_number: string;
  readonly carrier: string;
  readonly items: readonly WarehouseShipmentItemCreate[];
};
