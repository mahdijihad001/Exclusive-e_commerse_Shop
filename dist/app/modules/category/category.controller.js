"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const category_services_1 = require("./category.services");
const sendResponse_1 = require("../../utils/sendResponse");
const createCategory = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const result = await category_services_1.categorySecvices.createCategory(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        stautsCode: 201,
        success: true,
        message: "Category created success.",
        data: result
    });
});
const getAllCategory = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const query = req.query;
    const result = await category_services_1.categorySecvices.getAllCategory(query);
    (0, sendResponse_1.sendResponse)(res, {
        stautsCode: 200,
        success: true,
        message: "All Category Retrived successfully.",
        data: result.data,
        meta: result.meta
    });
});
exports.categoryController = {
    createCategory,
    getAllCategory
};
//# sourceMappingURL=category.controller.js.map