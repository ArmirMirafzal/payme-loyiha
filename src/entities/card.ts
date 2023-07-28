import { BaseEntity } from "./base";

export type CARD_TYPE = "UZCARD" | "HUMO" | "VISA" | "MASTER CARD";

export class Card extends BaseEntity {
  constructor(public cardNumber: string, public pin: number, public expiry: string, public type: CARD_TYPE, public balance: number, public ownerId: number, public bankName: string) {
    super();
  }
}
