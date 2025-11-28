"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHanle = void 0;
const zod_1 = require("zod");
const AppError_1 = require("../utils/AppError");
const env_1 = require("../config/env");
const globalErrorHanle = (err, req, res, next) => {
    if (env_1.envVer.DEVELOPMENT_ENVIRONMENT === "development") {
        console.log(err);
    }
    let stausCode = 500;
    let message = `Something went wrong.`;
    let errorStore = [];
    //----------- Zod Error Handle-------------
    if (err instanceof zod_1.ZodError) {
        const error = err.issues;
        error.forEach((issue) => {
            errorStore.push({
                path: issue.path[issue.path.length - 1],
                message: issue.message
            });
        });
        message = "Zod Error Validation",
            stausCode = 400;
    }
    // ------- Mongoose duplicate Error
    else if (err.code === 11000) {
        const duplicate = err.message.match(/"([^"]*)"/);
        message = `${duplicate[1]} already exist!`;
        stausCode = 400;
    }
    // Mongoose Cast error
    else if (err.name === "CastError") {
        stausCode = 400;
        message = "Invalid mongoDB Object id. Please provide a valid id.";
    }
    // ------------- Custom App error handle --------------
    else if (err instanceof AppError_1.AppError) {
        stausCode = err.statusCode;
        message = err.message;
    }
    // javascript default error Handle 
    else if (err instanceof Error) {
        stausCode = 500;
        message = err.message;
    }
    res.status(stausCode).json({
        success: false,
        message: message,
        errorStore,
        err: env_1.envVer.DEVELOPMENT_ENVIRONMENT === "development" ? err : null,
        stack: env_1.envVer.DEVELOPMENT_ENVIRONMENT === "development" ? err.stack : null
    });
};
exports.globalErrorHanle = globalErrorHanle;
//# sourceMappingURL=gbalErrorHandle.js.map