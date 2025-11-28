import mongoose from "mongoose";
import { IOrder } from "./payment.interface";
export declare const Order: mongoose.Model<IOrder, {}, {}, {}, mongoose.Document<unknown, {}, IOrder, {}, {}> & IOrder & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=payment.model.d.ts.map