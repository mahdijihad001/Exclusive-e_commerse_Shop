import { NextFunction, Request, Response } from "express";
export declare const userController: {
    createUser: (req: Request, res: Response, next: NextFunction) => void;
    loginUser: (req: Request, res: Response, next: NextFunction) => void;
    createAccessTokenUseRefreshToken: (req: Request, res: Response) => void;
    getallUser: (req: Request, res: Response, next: NextFunction) => void;
    getSingleUser: (req: Request, res: Response, next: NextFunction) => void;
    deleteSingleUser: (req: Request, res: Response, next: NextFunction) => void;
    updateUser: (req: Request, res: Response, next: NextFunction) => void;
};
//# sourceMappingURL=user.controller.d.ts.map