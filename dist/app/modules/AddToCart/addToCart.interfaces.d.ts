import { Types } from "mongoose";
export interface ICart {
    _id?: Types.ObjectId;
    userId: Types.ObjectId;
    productId: Types.ObjectId;
    quantity: number;
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=addToCart.interfaces.d.ts.map