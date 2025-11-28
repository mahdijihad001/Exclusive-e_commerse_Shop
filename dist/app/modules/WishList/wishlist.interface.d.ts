import { Types } from "mongoose";
export interface IWishlist {
    _id?: Types.ObjectId;
    userId: Types.ObjectId;
    productId?: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=wishlist.interface.d.ts.map