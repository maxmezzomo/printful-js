import { AvailabilityStatus, FileType, OptionType } from './common';

export type Product = {
  readonly id: number;
  readonly type: string;
  readonly type_name: string;
  readonly brand: string;
  readonly model: string;
  readonly image: string;
  readonly variant_count: number;
  readonly currency: string;
  readonly files: readonly FileType[];
  readonly options: readonly OptionType[];
  readonly is_discontinued: boolean;
  readonly avg_fulfillment_time: number;
  readonly description: string;
};

export type Variant = {
  readonly id: number;
  readonly product_id: number;
  readonly name: string;
  readonly size: string;
  readonly color: string;
  readonly color_code: string;
  readonly color_code2: string;
  readonly image: string;
  readonly price: string;
  readonly in_stock: boolean;
  readonly availability_regions: readonly (readonly string[])[];
  readonly availability_status: readonly AvailabilityStatus[];
};

export type VariantInfo = {
  readonly variant: Variant;
  readonly product: Product;
};

export type ProductInfo = {
  readonly product: Product;
  readonly variants: readonly Variant[];
};
