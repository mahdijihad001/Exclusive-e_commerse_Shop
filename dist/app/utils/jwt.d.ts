import { IUser } from "../modules/user/user.interfaces";
export interface IData {
    userId?: string;
    email?: string;
    role?: string;
}
export declare const generateJwtToken: (payload: Partial<IUser>) => {
    accessToken: string;
    refreshToken: string;
};
//# sourceMappingURL=jwt.d.ts.map