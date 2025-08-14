import { AppError } from "../utils/AppError.js";

interface IEnvironmentType {
    PORT: string,
    DEVELOPMENT_ENVIRONMENT : string
};


const loadEnvironment = (): IEnvironmentType => {

    const requiredEnvironment: string[] = ["PORT" , "DEVELOPMENT_ENVIRONMENT"];

    requiredEnvironment.forEach((key) => {
        if (!process.env[key]) {
            throw new AppError(400, "Required environment messing!")
        }
    })

    return {
        PORT: process.env.PORT as string,
        DEVELOPMENT_ENVIRONMENT : process.env.DEVELOPMENT_ENVIRONMENT as string
    }
};

export const envVer = loadEnvironment();