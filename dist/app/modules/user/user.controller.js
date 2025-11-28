"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const user_services_1 = require("./user.services");
const AppError_1 = require("../../utils/AppError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../../config/env");
const mongoose_1 = __importDefault(require("mongoose"));
const createUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const result = await user_services_1.userServices.createUser(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        stautsCode: 201,
        message: "User Created Successfully!",
        success: true,
        data: result
    });
});
const loginUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new AppError_1.AppError(400, "Email & Password required");
    }
    ;
    const result = await user_services_1.userServices.loginUser(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        stautsCode: 200,
        success: true,
        message: "Successfully login.",
        data: result
    });
});
const createAccessTokenUseRefreshToken = (req, res) => {
    const token = req.headers?.authorization;
    if (!token) {
        throw new AppError_1.AppError(401, "Please login first.");
    }
    ;
    let decodedToken;
    try {
        decodedToken = jsonwebtoken_1.default.verify(token, env_1.envVer.REFRESH_SECRATE);
    }
    catch (error) {
        throw new AppError_1.AppError(401, "User expired. Please login again.");
    }
    ;
    const payload = {
        userId: decodedToken.userId,
        email: decodedToken.email,
        role: decodedToken.role
    };
    const accessToken = jsonwebtoken_1.default.sign(payload, env_1.envVer.ACCESS_SECRATE, { expiresIn: "7d" });
    res.json({ message: "Token refreshded success.", accessToken: accessToken });
};
const getallUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const query = req.query;
    const result = await user_services_1.userServices.getAllUser(query);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        stautsCode: 200,
        message: "All user retrived successfully",
        data: result.user,
        meta: result.meta
    });
});
const getSingleUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        throw new AppError_1.AppError(400, "User ID is required");
    }
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new AppError_1.AppError(400, "User ID is not valid");
    }
    const objectId = new mongoose_1.default.Types.ObjectId(id);
    const result = await user_services_1.userServices.getSingleUser(objectId);
    (0, sendResponse_1.sendResponse)(res, {
        stautsCode: 200,
        success: true,
        message: "User finded successfully.",
        data: result
    });
});
const deleteSingleUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        throw new AppError_1.AppError(400, "User ID is required");
    }
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new AppError_1.AppError(400, "User id not valid");
    }
    const obejctId = new mongoose_1.default.Types.ObjectId(id);
    await user_services_1.userServices.deleteUser(obejctId);
    (0, sendResponse_1.sendResponse)(res, {
        stautsCode: 200,
        success: true,
        message: "User deleted success",
        data: null
    });
});
const updateUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        throw new AppError_1.AppError(400, "User Id required to update a user.");
    }
    const objectId = new mongoose_1.default.Types.ObjectId(id);
    const result = await user_services_1.userServices.updateUser(objectId, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        stautsCode: 200,
        success: true,
        message: "User upated Successfully!",
        data: result
    });
});
exports.userController = {
    createUser,
    loginUser,
    createAccessTokenUseRefreshToken,
    getallUser,
    getSingleUser,
    deleteSingleUser,
    updateUser
};
//# sourceMappingURL=user.controller.js.map