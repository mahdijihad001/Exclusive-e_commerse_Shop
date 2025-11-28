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
exports.productServices = {
    createProduct,
    deleteProduct
};
//# sourceMappingURL=product.services.js.map