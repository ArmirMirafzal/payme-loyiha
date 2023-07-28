"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const base_1 = require("./base");
class User extends base_1.BaseEntity {
    constructor(firstName, lastName, phoneNumber, password, isBlocked = false) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.isBlocked = isBlocked;
        this.transactions = [];
    }
    setTransaction(newTransaction) {
        this.transactions.push(newTransaction);
    }
    getTransaction() {
        return this.transactions;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
exports.User = User;
