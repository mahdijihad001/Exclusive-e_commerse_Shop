import { Types } from "mongoose";

export interface IWishlist {
  _id?: Types.ObjectId;
  userId: Types.ObjectId;        // ObjectId as string
  productId?: Types.ObjectId;    // ObjectId as string
  createdAt?: Date;
  updatedAt?: Date;
}
