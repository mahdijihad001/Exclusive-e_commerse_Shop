import mongoose from "mongoose";
import { IProduct } from "./product.interface";
export declare const Product: mongoose.Model<IProduct, {}, {}, {}, mongoose.Document<unknown, {}, IProduct, {}, {}> & IProduct & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=product.model.d.ts.map