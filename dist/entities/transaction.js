"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const base_1 = require("./base");
class Transaction extends base_1.BaseEntity {
    constructor(fromCard, toCard, amount, fromName, toName) {
        super();
        this.fromCard = fromCard;
        this.toCard = toCard;
        this.amount = amount;
        this.fromName = fromName;
        this.toName = toName;
        if (fromCard.balance < amount)
            throw new Error(`not enough money ${fromCard.cardNumber}`);
        fromCard.balance -= amount;
        toCard.balance += amount;
        this.transactionDate = new Date();
    }
}
exports.Transaction = Transaction;
