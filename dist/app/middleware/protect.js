"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = require("../utils/AppError");
const env_1 = require("../config/env");
const user_model_1 = __importDefault(require("../modules/user/user.model"));
const protect = (...auths) => async (req, res, next) => {
    const token = req.cookies.refreshToken;
    if (!token) {
        throw new AppError_1.AppError(401, "Unauthoraized user");
    }
    ;
    let decodedToken;
    try {
        decodedToken = jsonwebtoken_1.default.verify(token, env_1.envVer.REFRESH_SECRATE);
    }
    catch (error) {
        throw new AppError_1.AppError(401, "User token not valid. Please login again.");
    }
    ;
    const existUser = await user_model_1.default.findOne({ email: decodedToken.email });
    if (!existUser) {
        throw new AppError_1.AppError(404, "User not exist.");
    }
    if (req.body?.role && decodedToken.role === "USER") {
        throw new AppError_1.AppError(400, "Your are not allowed to promote yourself");
    }
    ;
    if (!auths.includes(decodedToken.role)) {
        throw new AppError_1.AppError(400, "You are not parmited access this route");
    }
    ;
    req.user = decodedToken;
    next();
};
exports.protect = protect;
//# sourceMappingURL=protect.js.map