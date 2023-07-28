"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainService = void 0;
const repository_1 = require("../repository");
class MainService {
    constructor() {
        this.userRepository = new repository_1.UserRepository();
        this.cardRepository = new repository_1.CardRepository();
    }
    registerUser(user) {
        this.userRepository.add(user);
    }
    registerCard(car) {
        this.cardRepository.add(car);
    }
    getCardList() {
        return this.cardRepository.getCardsList();
    }
    getUserList() {
        return this.userRepository.getUserList();
    }
    logIn(phoneNumber, password) {
        const user = this.userRepository.getUserByPhoneNumber(phoneNumber);
        if (user.password !== password)
            throw new Error(`❌ Incorrect password`);
        return user;
    }
    getCardsByPhoneNumber(phonerNumber) {
        const user = this.userRepository.getUserByPhoneNumber(phonerNumber);
        return this.cardRepository.getCardsByOwnerID(user.getId());
    }
}
exports.MainService = MainService;
