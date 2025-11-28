import { Types } from "mongoose";

export interface IVariant {
  color?: string;
  size?: string;
  stock?: number;
}

export interface IProduct {
  _id?: string;
  name: string;
  description: string;
  price: number;
  category: Types.ObjectId;
  images: string;
  status?: "active" | "inactive";
  variants?: IVariant[];
  ageGroup?: "0-3 months" | "3-6 months" | "6-12 months" | "1-2 years" | "2-5 years";
  createdAt?: Date;
  updatedAt?: Date;
}
