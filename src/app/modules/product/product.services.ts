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

export const productServices = {
    createProduct,
    deleteProduct
}