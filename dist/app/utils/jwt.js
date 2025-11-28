"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJwtToken = void 0;
const env_1 = require("../config/env");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const accessSecrate = (data) => {
    const token = jsonwebtoken_1.default.sign(data, env_1.envVer.ACCESS_SECRATE, { expiresIn: "7d" });
    return token;
};
const refreshSecrate = (data) => {
    const token = jsonwebtoken_1.default.sign(data, env_1.envVer.REFRESH_SECRATE, { expiresIn: "30d" });
    return token;
};
const generateJwtToken = (payload) => {
    const data = {
        userId: payload._id,
        email: payload.email,
        role: payload.role
    };
    const accessToken = accessSecrate(data);
    const refreshToken = refreshSecrate(data);
    return {
        accessToken,
        refreshToken
    };
};
exports.generateJwtToken = generateJwtToken;
//# sourceMappingURL=jwt.js.map