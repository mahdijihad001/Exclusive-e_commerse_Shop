"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryUpdateSchema = exports.createCategoryZodSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createCategoryZodSchema = zod_1.default.object({
    name: zod_1.default.string({ required_error: "Category name must be required" }),
    image: zod_1.default.string({ required_error: "Category Image must be required" })
});
exports.categoryUpdateSchema = zod_1.default.object({
    name: zod_1.default.string({ required_error: "Category name must be required" }).optional(),
    image: zod_1.default.string({ required_error: "Category Image must be required" }).optional()
});
//# sourceMappingURL=category.zod.schema.js.map