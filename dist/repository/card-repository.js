"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardRepository = void 0;
class CardRepository {
    constructor() {
        this.list = [];
        this.counterID = 0;
    }
    add(...newCards) {
        for (let newCard of newCards) {
            if (this.isExist(newCard.cardNumber))
                throw new Error(`This card(${newCard.cardNumber}) already exists`);
            newCard.setId(++this.counterID);
            this.list.push(newCard);
        }
    }
    isExist(cardNumber) {
        for (let card of this.list) {
            if (card.cardNumber === cardNumber)
                return true;
        }
        return false;
    }
    getCardsList() {
        return this.list;
    }
    getCardsByOwnerID(ownerID) {
        const cards = [];
        for (let card of this.list) {
            if (card.ownerId === ownerID)
                cards.push(card);
        }
        return cards;
    }
    getCardByCardNumber(cardNumber) {
        const card = this.list.find((card) => card.cardNumber === cardNumber);
        if (card)
            return card;
        throw new Error(`card not found with card number: ${cardNumber}`);
        // for (let card of this.list) {
        //   if (card.cardNumber == cardNumber) return card;
        // }
        // throw new Error(`This card(${cardNumber}) not found`);
    }
    getCardsByPhoneNumber(phoneNumber, userRepo) {
        const user = userRepo.getUserByPhoneNumber(phoneNumber);
        return this.getCardsByOwnerID(user.getId());
    }
}
exports.CardRepository = CardRepository;
