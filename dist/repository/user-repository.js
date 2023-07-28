"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor() {
        this.list = [];
        this.counterID = 0;
    }
    add(...newUsers) {
        for (let newUser of newUsers) {
            if (this.isExist(newUser.phoneNumber))
                throw new Error(`❌This user(${newUser.phoneNumber}) already exists`);
            newUser.setId(++this.counterID);
            this.list.push(newUser);
        }
    }
    isExist(phoneNumber) {
        for (let user of this.list) {
            if (user.phoneNumber === phoneNumber)
                return true;
        }
        return false;
    }
    getByID(userID) {
        for (let user of this.list) {
            if (user.getId() == userID)
                return user;
        }
        throw new Error(`This user(${userID}) not found`);
    }
    getUserByPhoneNumber(newPhonerNumber) {
        for (let user of this.list) {
            if (user.phoneNumber == newPhonerNumber)
                return user;
        }
        throw new Error(`This user(${newPhonerNumber}) not found`);
    }
    getUserList() {
        return this.list;
    }
}
exports.UserRepository = UserRepository;
