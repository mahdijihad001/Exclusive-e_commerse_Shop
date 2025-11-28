import z from "zod";
import { Role } from "./user.interfaces";
export declare const createUserZodSchema: z.ZodObject<{
    userName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    phone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userName: string;
    email: string;
    password: string;
    phone: string;
}, {
    userName: string;
    email: string;
    password: string;
    phone: string;
}>;
export declare const updateUserZodSchema: z.ZodObject<{
    userName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    photo: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodNativeEnum<typeof Role>>;
}, "strip", z.ZodTypeAny, {
    userName?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    phone?: string | undefined;
    photo?: string | undefined;
    address?: string | undefined;
    role?: Role | undefined;
}, {
    userName?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    phone?: string | undefined;
    photo?: string | undefined;
    address?: string | undefined;
    role?: Role | undefined;
}>;
//# sourceMappingURL=user.request.validation.d.ts.map