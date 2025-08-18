import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../utils/AppError";
import { envVer } from "../config/env";

export const globalErrorHanle = (err: any, req: Request, res: Response, next: NextFunction) => {

    if (envVer.DEVELOPMENT_ENVIRONMENT === "development") {
        console.log(err);
    }

    let stausCode = 500;
    let message = `Something went wrong.`;
    let errorStore: any = [];


    //----------- Zod Error Handle-------------
    if (err instanceof ZodError) {
        const error = err.issues;
        error.forEach((issue) =>{
            errorStore.push({
                path : issue.path[issue.path.length - 1],
                message : issue.message
            })
        });

        message = "Zod Error Validation",
        stausCode = 400
    }
    // ------- Mongoose duplicate Error
    else if(err.code === 11000){
        const duplicate = err.message.match(/"([^"]*)"/);
        message = `${duplicate[1]} already exist!`;
        stausCode = 400;
    }
    // Mongoose Cast error
    else if(err.name === "CastError"){
        stausCode = 400;
        message = "Invalid mongoDB Object id. Please provide a valid id."
    }
    // ------------- Custom App error handle --------------
    else if (err instanceof AppError) {
        stausCode = err.statusCode;
        message = err.message
    }
    // javascript default error Handle 
    else if (err instanceof Error) {
        stausCode = 500;
        message = err.message
    }


    res.status(stausCode).json({
        success: false,
        message: message,
        errorStore,
        err: envVer.DEVELOPMENT_ENVIRONMENT === "development" ? err : null,
        stack: envVer.DEVELOPMENT_ENVIRONMENT === "development" ? err.stack : null
    })

}