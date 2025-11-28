"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    orderItems: [
        {
            product: {
                type: mongoose_1.default.Schema.Types.ObjectId,
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
}, { timestamps: true });
exports.Order = mongoose_1.default.model("Order", orderSchema);
//# sourceMappingURL=payment.model.js.map