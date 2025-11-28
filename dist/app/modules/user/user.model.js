"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const user_interfaces_1 = require("./user.interfaces");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        requied: [true, "UserName must be required!"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password must be required"]
    },
    phone: {
        type: String,
        unique: true
    },
    photo: {
        type: String
    },
    address: {
        type: String
    },
    role: {
        type: String,
        required: String,
        default: user_interfaces_1.Role.USER
    }
}, { timestamps: true, versionKey: false });
userSchema.pre("save", async function (next) {
    if (!this.isModified("password"))
        return next();
    this.password = await bcryptjs_1.default.hash(this.password, 10);
    next();
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map