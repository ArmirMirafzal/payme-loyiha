import { UserRepository } from "../repository";

export class UserService extends UserRepository {
  logIn(phoneNumber: string, password: string) {
    const user = this.getUserByPhoneNumber(phoneNumber);

    if (user.password !== password) throw new Error(`❌ Incorrect password`);

    return user;
  }
}
