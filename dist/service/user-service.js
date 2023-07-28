"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const repository_1 = require("../repository");
class UserService extends repository_1.UserRepository {
    logIn(phoneNumber, password) {
        const user = this.getUserByPhoneNumber(phoneNumber);
        if (user.password !== password)
            throw new Error(`❌ Incorrect password`);
        return user;
    }
}
exports.UserService = UserService;
