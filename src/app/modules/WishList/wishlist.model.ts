import mongoose from "mongoose";
import { IWishlist } from "./wishlist.interface";

const wishlistSchema = new mongoose.Schema<IWishlist>(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    },
    { timestamps: true }
);

export const Wishlist = mongoose.model<IWishlist>("Wishlist", wishlistSchema);
