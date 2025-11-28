import { IProduct } from "./product.interface";
export declare const productServices: {
    createProduct: (payload: IProduct) => Promise<import("mongoose").Document<unknown, {}, IProduct, {}, {}> & IProduct & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    deleteProduct: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IProduct, {}, {}> & IProduct & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null>;
    updateProduct: (productId: string, payload: Partial<IProduct>) => Promise<(import("mongoose").Document<unknown, {}, IProduct, {}, {}> & IProduct & Required<{
        _id: string;
    }> & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=product.services.d.ts.map