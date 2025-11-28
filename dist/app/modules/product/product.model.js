"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
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
}, { timestamps: true });
exports.Product = mongoose_1.default.model("Product", productSchema);
//# sourceMappingURL=product.model.js.map