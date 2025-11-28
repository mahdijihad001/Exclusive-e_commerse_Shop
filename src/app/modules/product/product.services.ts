import { IProduct } from "./product.interface";
import { Product } from "./product.model";


const createProduct = async (payload: IProduct) => {
    const product = await Product.create(payload);
    return product;
};


const deleteProduct = async (id: string) => {
    const product = await Product.findByIdAndDelete(id);
    return product;
};


const updateProduct = async (productId: string, payload: Partial<IProduct> ) => {
    const updatedData: Record<string, unknown> = {};

    Object.entries(payload).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
            updatedData[key] = value;
        }
    });

    const result = await Product.findByIdAndUpdate(productId, { $set: updatedData }, {
        new: true,
        runValidators: true
    });

    return result;
};

export const productServices = {
    createProduct,
    deleteProduct,
    updateProduct
}