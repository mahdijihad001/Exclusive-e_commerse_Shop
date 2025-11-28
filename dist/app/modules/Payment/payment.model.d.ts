import mongoose from "mongoose";
export declare const Order: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    orderItems: mongoose.Types.DocumentArray<{
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }> & {
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }>;
    paymentStatus: "pending" | "unpaid" | "cancle" | "paid";
    orderStatus: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
    totalAmount: number;
    deliveredAt?: NativeDate | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    orderItems: mongoose.Types.DocumentArray<{
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }> & {
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }>;
    paymentStatus: "pending" | "unpaid" | "cancle" | "paid";
    orderStatus: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
    totalAmount: number;
    deliveredAt?: NativeDate | null;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    orderItems: mongoose.Types.DocumentArray<{
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }> & {
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }>;
    paymentStatus: "pending" | "unpaid" | "cancle" | "paid";
    orderStatus: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
    totalAmount: number;
    deliveredAt?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    orderItems: mongoose.Types.DocumentArray<{
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }> & {
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }>;
    paymentStatus: "pending" | "unpaid" | "cancle" | "paid";
    orderStatus: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
    totalAmount: number;
    deliveredAt?: NativeDate | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    orderItems: mongoose.Types.DocumentArray<{
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }> & {
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }>;
    paymentStatus: "pending" | "unpaid" | "cancle" | "paid";
    orderStatus: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
    totalAmount: number;
    deliveredAt?: NativeDate | null;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    orderItems: mongoose.Types.DocumentArray<{
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }> & {
        product: mongoose.Types.ObjectId;
        name?: string | null;
        image?: string | null;
        quantity?: number | null;
        price?: number | null;
    }>;
    paymentStatus: "pending" | "unpaid" | "cancle" | "paid";
    orderStatus: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
    totalAmount: number;
    deliveredAt?: NativeDate | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=payment.model.d.ts.map