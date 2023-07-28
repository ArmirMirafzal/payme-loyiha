"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRepository = void 0;
class TransactionRepository {
    constructor() {
        this.transactionList = [];
        this.counterID = 0;
    }
    add(...transactions) {
        for (let transaction of transactions) {
            transaction.setId(++this.counterID);
            this.transactionList.push(transaction);
        }
    }
    getTransactionList() {
        return this.transactionList;
    }
    getTransactionByID(transactionID) {
        for (let transaction of this.transactionList) {
            if (transaction.getId() === transactionID)
                return transaction;
        }
        throw new Error(`Transaction ${transactionID} not found`);
    }
    getTransactionByCardNumber(cardNumber) {
        const transactions = this.transactionList.filter((transaction) => {
            transaction.fromCard.cardNumber === cardNumber || transaction.toCard.cardNumber === cardNumber;
        });
        if (!transactions.length)
            throw new Error(`❌Transaction not found with ${cardNumber} card number`);
        return transactions;
    }
    result() {
        for (const transaction of this.transactionList) {
            console.log(`✅ manashu karta => [${transaction.fromCard.cardNumber}] egasi ( ${transaction.fromName} ) dan 
        manashu karta [${transaction.toCard.cardNumber}] egasi ( ${transaction.toName} ) ga ~ ${transaction.amount} so'm pul o'tkazildi✅ `);
        }
    }
}
exports.TransactionRepository = TransactionRepository;
