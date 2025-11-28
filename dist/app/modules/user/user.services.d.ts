import mongoose from "mongoose";
import { IUser } from "./user.interfaces";
export declare const userServices: {
    createUser: (payload: Partial<IUser>) => Promise<mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    loginUser: (payload: Partial<IUser>) => Promise<{
        token: {
            accessToken: string;
            refreshToken: string;
        };
        rest: {
            _id: string;
            userName: string;
            email: string;
            phone: string;
            photo?: string;
            address?: string;
            role?: import("./user.interfaces").Role;
            __v: number;
        };
    }>;
    getAllUser: (query: Record<string, string>) => Promise<{
        user: (mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
            _id: string;
        }> & {
            __v: number;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
    }>;
    getSingleUser: (id: mongoose.Types.ObjectId) => Promise<mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    deleteUser: (id: mongoose.Types.ObjectId) => Promise<null>;
    updateUser: (id: mongoose.Types.ObjectId, payload: Partial<IUser>) => Promise<mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
};
//# sourceMappingURL=user.services.d.ts.map