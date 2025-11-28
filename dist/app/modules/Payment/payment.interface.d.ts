import { Types } from "mongoose";
export interface IOrderItem {
    product: string;
    name?: string;
    price?: number;
    quantity?: number;
    image?: string;
}
export interface IOrder {
    _id?: string;
    userId: Types.ObjectId;
    orderItems: IOrderItem[];
    paymentStatus?: "pending" | "unpaid" | "cancle" | "paid";
    orderStatus?: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
    totalAmount: number;
    deliveredAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=payment.interface.d.ts.map