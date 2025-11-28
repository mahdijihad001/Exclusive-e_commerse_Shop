import mongoose from "mongoose";
import { ICart } from "./addToCart.interfaces";
export declare const Cart: mongoose.Model<ICart, {}, {}, {}, mongoose.Document<unknown, {}, ICart, {}, {}> & ICart & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=addToCart.model.d.ts.map