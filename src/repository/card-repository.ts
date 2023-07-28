import { Card } from "../entities/card";
import { UserRepository } from "./user-repository";

export class CardRepository {
  private list: Card[] = [];
  private counterID = 0;

  add(...newCards: Card[]) {
    for (let newCard of newCards) {
      if (this.isExist(newCard.cardNumber)) throw new Error(`This card(${newCard.cardNumber}) already exists`);
      newCard.setId(++this.counterID);
      this.list.push(newCard);
    }
  }

  isExist(cardNumber: string) {
    for (let card of this.list) {
      if (card.cardNumber === cardNumber) return true;
    }
    return false;
  }

  getCardsList() {
    return this.list;
  }

  getCardsByOwnerID(ownerID: number) {
    const cards: Card[] = [];

    for (let card of this.list) {
      if (card.ownerId === ownerID) cards.push(card);
    }

    return cards;
  }

  getCardByCardNumber(cardNumber: string) {
    const card = this.list.find((card) => card.cardNumber === cardNumber);
    if(card) return card;
    throw new Error(`card not found with card number: ${cardNumber}`);

    // for (let card of this.list) {
    //   if (card.cardNumber == cardNumber) return card;
    // }
    // throw new Error(`This card(${cardNumber}) not found`);
  }

  getCardsByPhoneNumber(phoneNumber: string, userRepo: UserRepository) {
    const user = userRepo.getUserByPhoneNumber(phoneNumber);
    return this.getCardsByOwnerID(user.getId());
  }
}
