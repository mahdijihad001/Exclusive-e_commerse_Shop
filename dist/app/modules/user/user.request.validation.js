"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserZodSchema = exports.createUserZodSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const user_interfaces_1 = require("./user.interfaces");
exports.createUserZodSchema = zod_1.default.object({
    userName: zod_1.default.string({ invalid_type_error: "User name must be string!" }).min(4, { message: "User name must be 4 character" }).nonempty("Username is required!"),
    email: zod_1.default.string().email({ message: "Invalid email formate" }).trim().toLowerCase().nonempty("Email is required!"),
    password: zod_1.default.string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/\d/, "Password must contain at least one number")
        .regex(/[!@#$%^&*()_\-+\[\]{}:;'",.<>\/?\\|`~]/, "Password must contain at least one special character").nonempty("Password is required!"),
    phone: zod_1.default.string().regex(/^(?:\+8801|8801|01)[3-9]\d{8}$/, "Invalid Bangladeshi phone number").nonempty("Phone is required")
});
exports.updateUserZodSchema = zod_1.default.object({
    userName: zod_1.default.string({ invalid_type_error: "User name must be string!" }).min(4, { message: "User name must be 4 character" }).optional(),
    email: zod_1.default.string().email({ message: "Invalid email formate" }).trim().toLowerCase().optional(),
    password: zod_1.default.string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/\d/, "Password must contain at least one number")
        .regex(/[!@#$%^&*()_\-+\[\]{}:;'",.<>\/?\\|`~]/, "Password must contain at least one special character").optional(),
    phone: zod_1.default.string().regex(/^(?:\+8801|8801|01)[3-9]\d{8}$/, "Invalid Bangladeshi phone number").optional(),
    photo: zod_1.default.string().optional(),
    address: zod_1.default.string().optional(),
    role: zod_1.default.nativeEnum(user_interfaces_1.Role, { invalid_type_error: "Invalid role" }).optional()
});
//# sourceMappingURL=user.request.validation.js.map