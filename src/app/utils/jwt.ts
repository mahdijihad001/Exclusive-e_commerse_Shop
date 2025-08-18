import { IUser } from "../modules/user/user.interfaces";
import jwt, { JwtPayload } from "jsonwebtoken";

interface IData {
    userId?: string,
    email?: string,
    role?: string
}

const accessSecrate = (data: Partial<IData>) => {
    const token = jwt.sign(data, "secrate", { expiresIn: "7d" });
    return token
};

const refreshSecrate = (data: Partial<IData>) => {
    const token = jwt.sign(data, "secrate", { expiresIn: "30d" });
    return token
}

export const generateJwtToken = (payload: Partial<IUser>) => {

    const data = {
        userId: payload._id,
        email: payload.email,
        role: payload.role
    }

    const accessToken = accessSecrate(data as IData);
    const refreshToken = refreshSecrate(data as IData)

    return {
        accessToken,
        refreshToken
    }

}