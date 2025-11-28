import mongoose from "mongoose";
export declare const Product: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "active" | "inactive";
    name: string;
    description: string;
    category: mongoose.Types.ObjectId;
    price: number;
    images: string;
    variants: mongoose.Types.DocumentArray<{
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }> & {
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }>;
    ageGroup?: "0-3 months" | "3-6 months" | "6-12 months" | "1-2 years" | "2-5 years" | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "active" | "inactive";
    name: string;
    description: string;
    category: mongoose.Types.ObjectId;
    price: number;
    images: string;
    variants: mongoose.Types.DocumentArray<{
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }> & {
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }>;
    ageGroup?: "0-3 months" | "3-6 months" | "6-12 months" | "1-2 years" | "2-5 years" | null;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "active" | "inactive";
    name: string;
    description: string;
    category: mongoose.Types.ObjectId;
    price: number;
    images: string;
    variants: mongoose.Types.DocumentArray<{
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }> & {
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }>;
    ageGroup?: "0-3 months" | "3-6 months" | "6-12 months" | "1-2 years" | "2-5 years" | null;
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
    status: "active" | "inactive";
    name: string;
    description: string;
    category: mongoose.Types.ObjectId;
    price: number;
    images: string;
    variants: mongoose.Types.DocumentArray<{
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }> & {
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }>;
    ageGroup?: "0-3 months" | "3-6 months" | "6-12 months" | "1-2 years" | "2-5 years" | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "active" | "inactive";
    name: string;
    description: string;
    category: mongoose.Types.ObjectId;
    price: number;
    images: string;
    variants: mongoose.Types.DocumentArray<{
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }> & {
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }>;
    ageGroup?: "0-3 months" | "3-6 months" | "6-12 months" | "1-2 years" | "2-5 years" | null;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "active" | "inactive";
    name: string;
    description: string;
    category: mongoose.Types.ObjectId;
    price: number;
    images: string;
    variants: mongoose.Types.DocumentArray<{
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }> & {
        color?: string | null;
        size?: string | null;
        stock?: number | null;
    }>;
    ageGroup?: "0-3 months" | "3-6 months" | "6-12 months" | "1-2 years" | "2-5 years" | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=product.model.d.ts.map