import { BaseEntity } from "./base";
import { Transaction } from "./transaction";

export class User extends BaseEntity {
  private transactions: Transaction[] = [];
  constructor(public firstName: string, public lastName: string, public phoneNumber: string, public password: string, public isBlocked = false) {
    super();
  }

  setTransaction(newTransaction: Transaction){
    this.transactions.push(newTransaction);
  }
  getTransaction(){
    return this.transactions
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}
