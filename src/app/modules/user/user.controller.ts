import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { userServices } from "./user.services";
import { AppError } from "../../utils/AppError";
import jwt, { JwtPayload } from "jsonwebtoken";
import { envVer } from "../../config/env";
import mongoose from "mongoose";

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await userServices.createUser(req.body);
    sendResponse(res, {
        stautsCode: 201,
        message: "User Created Successfully!",
        success: true,
        data: result
    })
});

const loginUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new AppError(400, "Email & Password required");
    };

    const result = await userServices.loginUser(req.body);

    res.cookie("accessToken", result.token.accessToken, { httpOnly: true, secure: false });
    res.cookie("refreshToken", result.token.refreshToken, { httpOnly: true, secure: false });


    sendResponse(res, {
        stautsCode: 200,
        success: true,
        message: "Successfully login.",
        data: result.rest
    })
});


const createAccessTokenUseRefreshToken = (req: Request, res: Response) => {
    const token = req.cookies.refreshToken;

    if (!token) {
        throw new AppError(401, "Please login first.")
    };

    let decodedToken;

    try {

        decodedToken = jwt.verify(token, envVer.REFRESH_SECRATE) as JwtPayload;

    } catch (error) {
        throw new AppError(401, "User expired. Please login again.");
    };

    const payload = {
        userId: decodedToken.userId,
        email: decodedToken.email,
        role: decodedToken.role
    }

    const accessToken = jwt.sign(payload, envVer.ACCESS_SECRATE, { expiresIn: "7d" });

    res.cookie("accessToken", accessToken, { httpOnly: true, secure: false });
    res.json({ message: "Token refreshded success." });
};

const getallUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query
    const result = await userServices.getAllUser(query as Record<string, string>)

    sendResponse(res, {
        success: true,
        stautsCode: 200,
        message: "All user retrived successfully",
        data: result.user,
        meta: result.meta
    })
});

const getSingleUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;

    if (!id) {
        throw new AppError(400, "User ID is required");
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError(400, "User ID is not valid");
    }
    const objectId = new mongoose.Types.ObjectId(id);

    const result = await userServices.getSingleUser(objectId);

    sendResponse(res, {
        stautsCode: 200,
        success: true,
        message: "User finded successfully.",
        data: result
    })
});

const deleteSingleUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;

    if (!id) {
        throw new AppError(400, "User ID is required");
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError(400, "User id not valid");
    }

    const obejctId = new mongoose.Types.ObjectId(id);

    await userServices.deleteUser(obejctId);

    sendResponse(res, {
        stautsCode: 200,
        success: true,
        message: "User deleted success",
        data: null
    })
});

const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;

    if (!id) {
        throw new AppError(400, "User Id required to update a user.")
    }

    const objectId = new mongoose.Types.ObjectId(id);

    const result = await userServices.updateUser(objectId, req.body);

    sendResponse(res, {
        stautsCode: 200,
        success: true,
        message: "User upated Successfully!",
        data: result
    });
});

export const userController = {
    createUser,
    loginUser,
    createAccessTokenUseRefreshToken,
    getallUser,
    getSingleUser,
    deleteSingleUser,
    updateUser
}