"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const constrain_1 = require("../../constrain/constrain");
const AppError_1 = require("../../utils/AppError");
const jwt_1 = require("../../utils/jwt");
const QueryBuilder_1 = require("../../utils/QueryBuilder");
const user_model_1 = __importDefault(require("./user.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const createUser = async (payload) => {
    const email = await user_model_1.default.findOne({ email: payload.email });
    const phone = await user_model_1.default.findOne({ phone: payload.phone });
    const duplicateMessage = email ? "Email" : phone ? "Phone" : "";
    if (duplicateMessage) {
        throw new AppError_1.AppError(400, `${duplicateMessage} already exist`);
    }
    ;
    const result = await user_model_1.default.create(payload);
    return result;
};
const loginUser = async (payload) => {
    const existUser = await user_model_1.default.findOne({ email: payload.email });
    if (!existUser) {
        throw new AppError_1.AppError(404, "User not valid. Please register.");
    }
    ;
    const matchPassword = await bcryptjs_1.default.compare(payload.password, existUser.password);
    if (!matchPassword) {
        throw new AppError_1.AppError(400, "Password not valid.");
    }
    ;
    const token = (0, jwt_1.generateJwtToken)(existUser);
    const { password: pass, ...rest } = existUser.toObject();
    return { token, rest };
};
const getAllUser = async (query) => {
    const queryBuilder = new QueryBuilder_1.QueryBuilder(user_model_1.default.find(), query);
    const user = await queryBuilder.filter().search(constrain_1.userSearchableFild).paginate().sort().build();
    const meta = await queryBuilder.getMeta();
    return { user, meta };
};
const getSingleUser = async (id) => {
    const findUser = await user_model_1.default.findById(id);
    if (!findUser) {
        throw new AppError_1.AppError(404, "User not found.");
    }
    ;
    return findUser;
};
const deleteUser = async (id) => {
    await user_model_1.default.findByIdAndDelete(id);
    return null;
};
const updateUser = async (id, payload) => {
    const result = await user_model_1.default.findByIdAndUpdate(id, { ...payload }, { new: true, runValidators: true });
    if (!result) {
        throw new AppError_1.AppError(400, "User not update.");
    }
    ;
    return result;
};
exports.userServices = {
    createUser,
    loginUser,
    getAllUser,
    getSingleUser,
    deleteUser,
    updateUser
};
//# sourceMappingURL=user.services.js.map