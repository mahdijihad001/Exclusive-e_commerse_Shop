import mongoose from "mongoose";
import { ICart } from "./addToCart.interfaces";

const cartSchema = new mongoose.Schema<ICart>(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        quantity: {
            type: Number,
            default: 1,
            min: 1,
        }
    },
    { timestamps: true }
);

export const Cart = mongoose.model<ICart>("Cart", cartSchema);
