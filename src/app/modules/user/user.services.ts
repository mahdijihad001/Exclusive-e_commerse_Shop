import { AppError } from "../../utils/AppError";
import { IUser } from "./user.interfaces";
import User from "./user.model";

const createUser = async (payload: Partial<IUser>) => {
    const email = await User.findOne({ email: payload.email });
    const phone = await User.findOne({ phone: payload.phone });

    const duplicateMessage = email ? "Email" : phone ? "Phone" : "";

    if (duplicateMessage) {
        throw new AppError(400, `${duplicateMessage} already exist`)
    };

    const result = await User.create(payload);
    return result
};


export const userServices = {
    createUser
}