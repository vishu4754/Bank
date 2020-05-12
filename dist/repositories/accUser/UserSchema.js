"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class UserSchema extends mongoose.Schema {
    constructor(options) {
        const userSchema = {
            id: String,
            name: String,
            accountNo: Number,
            email: String,
            password: String,
            balance: Number,
        };
        super(userSchema, options);
    }
}
exports.default = UserSchema;
//# sourceMappingURL=UserSchema.js.map