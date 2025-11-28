import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        orderItems: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                name: String,
                price: Number,
                quantity: Number,
                image: String,
            },
        ],

        paymentStatus: {
            type: String,
            enum: ["pending", "unpaid", "cancle", "paid"],
            default: "pending",
        },

        orderStatus: {
            type: String,
            enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
            default: "pending",
        },

        totalAmount: {
            type: Number,
            required: true,
        },

        deliveredAt: {
            type: Date,
        },
    },
    { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
