"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySecvices = void 0;
const constrain_1 = require("../../constrain/constrain");
const AppError_1 = require("../../utils/AppError");
const QueryBuilder_1 = require("../../utils/QueryBuilder");
const category_model_1 = __importDefault(require("./category.model"));
const createCategory = async (payload) => {
    const existCategory = await category_model_1.default.findOne({ name: payload.name });
    if (existCategory) {
        throw new AppError_1.AppError(400, "This category already hare.");
    }
    ;
    const result = await category_model_1.default.create(payload);
    return result;
};
const getAllCategory = async (query) => {
    const baseQuery = new QueryBuilder_1.QueryBuilder(category_model_1.default.find(), query);
    const data = await baseQuery.filter().search(constrain_1.categorySearchAbleFild).paginate().sort().build();
    const meta = await baseQuery.getMeta();
    return { data, meta };
};
exports.categorySecvices = {
    createCategory,
    getAllCategory
};
//# sourceMappingURL=category.services.js.map