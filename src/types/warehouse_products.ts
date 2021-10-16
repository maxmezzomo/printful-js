type WarehouseProductStatus =
  | 'created'
  | 'active'
  | 'suspended'
  | 'declined'
  | 'draft';

export type WarehouseProductVariant = {
  readonly id: number;
  readonly name: string;
  readonly sku: string;
  readonly image_url: string;
  readonly retail_price: number;
  readonly quantity: number;
  readonly length: number;
  readonly width: number;
  readonly height: number;
  readonly weight: number;
};

export type WarehouseProduct = {
  readonly id: number;
  readonly name: string;
  readonly status: WarehouseProductStatus;
  readonly currency: string;
  readonly retail_price: number;
  readonly variants: readonly WarehouseProductVariant[];
};
