import type { NextFunction, Request, Response } from "express";
import { envVer } from "../config/env.js";
import { AppError } from "../utils/AppError.js";

export const globalErrorHanle = (err: any, req: Request, res: Response, next: NextFunction) => {

    if (envVer.DEVELOPMENT_ENVIRONMENT === "development") {
        console.log(err);
    }

    let stausCode = 500;
    let message = `Something went wrong.`;

    if (err instanceof AppError) {
        stausCode = err.statusCode;
        message = err.message
    } else if (err instanceof Error) {
        stausCode = 500;
        message = err.message
    };


    res.status(stausCode).json({
        success: false,
        message: message,
        err: envVer.DEVELOPMENT_ENVIRONMENT === "development" ? err : null,
        stack: envVer.DEVELOPMENT_ENVIRONMENT === "development" ? err.stack : null
    })

}