"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
class BaseEntity {
    getId() {
        return this.id;
    }
    setId(newId) {
        this.id = newId;
    }
}
exports.BaseEntity = BaseEntity;
