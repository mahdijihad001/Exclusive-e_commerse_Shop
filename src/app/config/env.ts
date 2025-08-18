import { AppError } from "../utils/AppError";
import dotEnv from "dotenv";
dotEnv.config();

interface IEnvironmentType {
    PORT: string,
    DEVELOPMENT_ENVIRONMENT: string,
    MONGO_URI: string,
    ACCESS_SECRATE : string,
    REFRESH_SECRATE : string
};


const loadEnvironment = (): IEnvironmentType => {

    const requiredEnvironment: string[] = ["PORT", "DEVELOPMENT_ENVIRONMENT", "MONGO_URI" , "ACCESS_SECRATE" , "REFRESH_SECRATE"];

    requiredEnvironment.forEach((key) => {
        if (!process.env[key]) {
            throw new AppError(400, `${key} Required environment messing!`);
        }
    })

    return {
        PORT: process.env.PORT as string,
        DEVELOPMENT_ENVIRONMENT: process.env.DEVELOPMENT_ENVIRONMENT as string,
        MONGO_URI: process.env.MONGO_URI as string,
        ACCESS_SECRATE : process.env.ACCESS_SECRATE as string,
        REFRESH_SECRATE : process.env.REFRESH_SECRATE as string
    }
};

export const envVer = loadEnvironment();