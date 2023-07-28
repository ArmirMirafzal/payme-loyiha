"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("./entities");
const service_1 = require("./service");
const card_service_1 = require("./service/card-service");
const user_service_1 = require("./service/user-service");
const cardService = new card_service_1.CardService();
const userService = new user_service_1.UserService();
const transactionService = new service_1.TransactionService();
function defaults() {
    const mark = new entities_1.User("Mark", "Tween", "+99891234567", "root123");
    const kent = new entities_1.User("Kent", "John", "+99891234568", "root124");
    userService.add(mark, kent);
    const card1 = new entities_1.Card("8600 1234 5678 1234", 7777, "12/24", "UZCARD", 100, mark.getId(), "TBC Bank");
    const card2 = new entities_1.Card("8600 1234 5678 1235", 7788, "12/24", "UZCARD", 50, kent.getId(), "TBC Bank");
    cardService.add(card1);
    cardService.add(card2);
}
function transactionFn(fromCardNumber, toCardNumber, amount) {
    const fromCard = cardService.getCardByCardNumber(fromCardNumber);
    const toCard = cardService.getCardByCardNumber(toCardNumber);
    const fromName = userService.getByID(fromCard.ownerId);
    const toName = userService.getByID(toCard.ownerId);
    const transaction = new entities_1.Transaction(fromCard, toCard, amount, fromName.getFullName(), toName.getFullName());
    transactionService.add(transaction);
}
function main() {
    defaults();
    transactionFn("8600 1234 5678 1234", "8600 1234 5678 1235", 70);
    transactionFn("8600 1234 5678 1235", "8600 1234 5678 1234", 20);
    // console.log(transactionService.getTransactionList());
    transactionService.result();
}
main();
