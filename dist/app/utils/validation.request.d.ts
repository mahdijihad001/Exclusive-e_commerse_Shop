import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
export declare const requestValidation: (zodSchema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=validation.request.d.ts.map