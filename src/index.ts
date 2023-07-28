import { Card, Transaction, User } from "./entities";
import { TransactionService } from "./service";
import { CardService } from "./service/card-service";
import { UserService } from "./service/user-service";

const cardService = new CardService();
const userService = new UserService();
const transactionService = new TransactionService();

function defaults() {
  const mark = new User("Mark", "Tween", "+99891234567", "root123");
  const kent = new User("Kent", "John", "+99891234568", "root124");
  userService.add(mark, kent);

  const card1 = new Card("8600 1234 5678 1234", 7777, "12/24", "UZCARD", 100, mark.getId(), "TBC Bank");
  const card2 = new Card("8600 1234 5678 1235", 7788, "12/24", "UZCARD", 50, kent.getId(), "TBC Bank");
  cardService.add(card1);
  cardService.add(card2);
}

function transactionFn(fromCardNumber: string, toCardNumber: string, amount: number) {
  const fromCard = cardService.getCardByCardNumber(fromCardNumber);
  const toCard = cardService.getCardByCardNumber(toCardNumber);

  const fromName = userService.getByID(fromCard.ownerId);
  const toName = userService.getByID(toCard.ownerId);

  const transaction = new Transaction(fromCard, toCard, amount, fromName.getFullName(), toName.getFullName());
  transactionService.add(transaction);
}

function main() {
  defaults();
  transactionFn("8600 1234 5678 1234", "8600 1234 5678 1235", 70);
  transactionFn("8600 1234 5678 1235", "8600 1234 5678 1234", 20)
  // console.log(transactionService.getTransactionList());
  transactionService.result();
}

main();

