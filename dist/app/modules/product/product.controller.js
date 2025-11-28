"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const product_services_1 = require("./product.services");
const AppError_1 = require("../../utils/AppError");
const createProduct = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const data = req.body;
    const result = await product_services_1.productServices.createProduct(data);
    (0, sendResponse_1.sendResponse)(res, {
        stautsCode: 201,
        success: true,
        message: "Product posted success",
        data: result
    });
});
const deleteProduct = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { id } = req.params;
    const result = await product_services_1.productServices.deleteProduct(id);
    if (!result)
        throw new AppError_1.AppError(400, "Product not found");
    (0, sendResponse_1.sendResponse)(res, {
        stautsCode: 200,
        success: true,
        message: "Product deleted successfully",
        data: result,
    });
});
const updateProduct = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await product_services_1.productServices.updateProduct(id, payload);
    if (!result)
        throw new AppError_1.AppError(200, "Product not found");
    (0, sendResponse_1.sendResponse)(res, {
        stautsCode: 200,
        success: true,
        message: "Product updated successfully",
        data: result,
    });
});
exports.productController = {
    createProduct,
    deleteProduct,
    updateProduct
};
//# sourceMappingURL=product.controller.js.map