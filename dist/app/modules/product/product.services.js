"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const product_model_1 = require("./product.model");
const createProduct = async (payload) => {
    const product = await product_model_1.Product.create(payload);
    return product;
};
const deleteProduct = async (id) => {
    const product = await product_model_1.Product.findByIdAndDelete(id);
    return product;
};
const updateProduct = async (productId, payload) => {
    const updatedData = {};
    Object.entries(payload).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
            updatedData[key] = value;
        }
    });
    const result = await product_model_1.Product.findByIdAndUpdate(productId, { $set: updatedData }, {
        new: true,
        runValidators: true
    });
    return result;
};
exports.productServices = {
    createProduct,
    deleteProduct,
    updateProduct
};
//# sourceMappingURL=product.services.js.map