import { Address, CardInfo, Timestamp } from './common';

export type PackingSlip = {
  readonly email: string;
  readonly phone: string;
  readonly message: string;
};

export type StoreData = {
  readonly id: number;
  readonly name: string;
  readonly website: string;
  readonly return_address: Address;
  readonly billing_address: Address;
  readonly currency: string;
  readonly payment_card: CardInfo;
  readonly packing_slip: PackingSlip;
  readonly type: string;
  readonly created: Timestamp;
};
