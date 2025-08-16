import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { userServices } from "./user.services";

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await userServices.createUser(req.body);
    sendResponse(res, {
        stautsCode: 201,
        message: "User Created Successfully!",
        success: true,
        data: result
    })
})