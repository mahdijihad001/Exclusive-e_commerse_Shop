import { AppError } from "../../utils/AppError";
import { generateJwtToken } from "../../utils/jwt";
import { IUser } from "./user.interfaces";
import User from "./user.model";
import bcrypt from "bcryptjs";

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

const loginUser = async(payload : Partial<IUser>) =>{

    if(!payload.email && payload.password){
        throw new AppError(400 , "Email & Password required");
    };

    const existUser = await User.findOne({email : payload.email});

    if(!existUser){
        throw new AppError(404 , "User not valid. Please register.");
    };

    const matchPassword = await bcrypt.compare(payload.password as string , existUser.password);

    if(!matchPassword){
        throw new AppError(400 , "Password not valid.");
    };
    
    const token = generateJwtToken(existUser)

}

export const userServices = {
    createUser,
    loginUser
}