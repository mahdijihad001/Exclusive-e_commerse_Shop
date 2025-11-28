"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVer = void 0;
const AppError_1 = require("../utils/AppError");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
;
const loadEnvironment = () => {
    const requiredEnvironment = ["PORT", "DEVELOPMENT_ENVIRONMENT", "MONGO_URI", "ACCESS_SECRATE", "REFRESH_SECRATE"];
    requiredEnvironment.forEach((key) => {
        if (!process.env[key]) {
            throw new AppError_1.AppError(400, `${key} Required environment messing!`);
        }
    });
    return {
        PORT: process.env.PORT,
        DEVELOPMENT_ENVIRONMENT: process.env.DEVELOPMENT_ENVIRONMENT,
        MONGO_URI: process.env.MONGO_URI,
        ACCESS_SECRATE: process.env.ACCESS_SECRATE,
        REFRESH_SECRATE: process.env.REFRESH_SECRATE
    };
};
exports.envVer = loadEnvironment();
//# sourceMappingURL=env.js.map