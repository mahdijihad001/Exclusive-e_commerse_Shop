import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AppError } from "../utils/AppError";
import { envVer } from "../config/env";
import User from "../modules/user/user.model";

export const protect = (...auths: string[]) => async(req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.accessToken;

    if (!token) {
        throw new AppError(401, "Unauthoraized user");
    };

    let decodedToken : JwtPayload;

    try {
        decodedToken = jwt.verify(token, envVer.ACCESS_SECRATE) as JwtPayload
    } catch (error) {
        throw new AppError(401, "User token not valid. Please login again.");
    };

    const existUser = await User.findOne({email : decodedToken.email});

    if(!existUser){
        throw new AppError(404 , "User not exist.");
    }

    if (req.body?.role && decodedToken.role === "USER") {
        throw new AppError(400, "Your are not allowed to promote yourself");
    };

    if(!auths.includes(decodedToken.role)){
        throw new AppError(400 , "You are not parmited access this route");
    };

    req.user = decodedToken

    next();

}