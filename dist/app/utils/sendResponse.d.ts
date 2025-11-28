import { Response } from "express";
interface IMeta {
    total: number;
}
interface IResponseData<T> {
    stautsCode: number;
    success: boolean;
    message: string;
    data: T;
    meta?: IMeta;
}
export declare const sendResponse: <T>(res: Response, data: IResponseData<T>) => void;
export {};
//# sourceMappingURL=sendResponse.d.ts.map