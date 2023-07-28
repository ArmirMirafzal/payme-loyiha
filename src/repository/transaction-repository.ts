import { Transaction } from "../entities/transaction";

export class TransactionRepository {
  private transactionList: Transaction[] = [];
  private counterID = 0;

  add(...transactions: Transaction[]) {
    for (let transaction of transactions) {
      transaction.setId(++this.counterID);
      this.transactionList.push(transaction);
    }
  }

  getTransactionList() {
    return this.transactionList;
  }

  getTransactionByID(transactionID: number) {
    for (let transaction of this.transactionList) {
      if (transaction.getId() === transactionID) return transaction;
    }

    throw new Error(`Transaction ${transactionID} not found`);
  }

  getTransactionByCardNumber(cardNumber: string) {
    const transactions: Transaction[] = this.transactionList.filter((transaction) => {
      transaction.fromCard.cardNumber === cardNumber || transaction.toCard.cardNumber === cardNumber;
    });

    if (!transactions.length) throw new Error(`❌Transaction not found with ${cardNumber} card number`);

    return transactions;
  }

  result() {
    for (const transaction of this.transactionList) {
      console.log(`✅ manashu karta => [${transaction.fromCard.cardNumber}] egasi ( ${transaction.fromName} ) dan 
        manashu karta [${transaction.toCard.cardNumber}] egasi ( ${transaction.toName} ) ga ~ ${transaction.amount} so'm pul o'tkazildi✅ `);
    }
  }
}
