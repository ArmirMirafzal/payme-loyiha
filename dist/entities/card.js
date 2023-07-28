"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const base_1 = require("./base");
class Card extends base_1.BaseEntity {
    constructor(cardNumber, pin, expiry, type, balance, ownerId, bankName) {
        super();
        this.cardNumber = cardNumber;
        this.pin = pin;
        this.expiry = expiry;
        this.type = type;
        this.balance = balance;
        this.ownerId = ownerId;
        this.bankName = bankName;
    }
}
exports.Card = Card;
