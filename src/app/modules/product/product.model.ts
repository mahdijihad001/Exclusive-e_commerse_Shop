import mongoose from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new mongoose.Schema<IProduct>(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
            trim: true,
        },
        description: {
            type: String,
            required: [true, "Product description is required"],
        },
        price: {
            type: Number,
            required: [true, "Product price is required"],
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "category",
            required: true,
        },
        images: {
            type: String,
            required: [true, "Product images is required"]
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
        },
        variants: [
            {
                color: String,
                size: String,
                stock: Number,
            },
        ],
        ageGroup: {
            type: String,
            enum: ["0-3 months", "3-6 months", "6-12 months", "1-2 years", "2-5 years"],
        }
    },
    { timestamps: true }
);

export const Product = mongoose.model<IProduct>("Product", productSchema);
