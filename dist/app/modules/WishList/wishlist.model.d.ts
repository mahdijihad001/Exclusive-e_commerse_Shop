import mongoose from "mongoose";
import { IWishlist } from "./wishlist.interface";
export declare const Wishlist: mongoose.Model<IWishlist, {}, {}, {}, mongoose.Document<unknown, {}, IWishlist, {}, {}> & IWishlist & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=wishlist.model.d.ts.map