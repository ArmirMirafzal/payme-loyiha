import { BaseEntity } from "./base";
import { Card } from "./card";

export class Transaction extends BaseEntity {
  transactionDate: Date;
  constructor(public fromCard: Card, public toCard: Card, public amount: number, public fromName: string, public toName: string) {
    super();

    if(fromCard.balance < amount) throw new Error(`not enough money ${fromCard.cardNumber}`)
    fromCard.balance -=amount;
    toCard.balance +=amount;

    this.transactionDate = new Date();
  }
}
