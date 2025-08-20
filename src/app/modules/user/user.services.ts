import mongoose from "mongoose";
import { userSearchableFild } from "../../constrain/constrain";
import { AppError } from "../../utils/AppError";
import { generateJwtToken } from "../../utils/jwt";
import { QueryBuilder } from "../../utils/QueryBuilder";
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

const loginUser = async (payload: Partial<IUser>) => {

    const existUser = await User.findOne({ email: payload.email });

    if (!existUser) {
        throw new AppError(404, "User not valid. Please register.");
    };

    const matchPassword = await bcrypt.compare(payload.password as string, existUser.password);

    if (!matchPassword) {
        throw new AppError(400, "Password not valid.");
    };

    const token = generateJwtToken(existUser);

    const { password: pass, ...rest } = existUser.toObject();

    return {token , rest}

};


const getAllUser = async(query : Record<string , string>) =>{

    const queryBuilder = new QueryBuilder(User.find() , query);

    const user = await queryBuilder.filter().search(userSearchableFild).paginate().sort().build();
    const meta = await queryBuilder.getMeta();

    return {user , meta};

};

const getSingleUser = async(id : mongoose.Types.ObjectId) =>{
    const findUser = await User.findById(id);

    if(!findUser){
        throw new AppError(404 , "User not found.");
    };

    return findUser
};

const deleteUser = async(id : mongoose.Types.ObjectId) =>{
    await User.findByIdAndDelete(id);
    return null
};

const updateUser = async(id : mongoose.Types.ObjectId, payload : Partial<IUser>) =>{
    const result = await User.findByIdAndUpdate(id , {...payload} , {new : true , runValidators : true});
    if(!result){
        throw new AppError(400 , "User not update.");
    };

    return result;

}

export const userServices = {
    createUser,
    loginUser,
    getAllUser,
    getSingleUser,
    deleteUser,
    updateUser
}