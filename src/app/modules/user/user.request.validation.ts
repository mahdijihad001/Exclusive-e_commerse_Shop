import z from "zod";
import { Role } from "./user.interfaces";

export const createUserZodSchema = z.object({
    userName: z.string({ invalid_type_error: "User name must be string!" }).min(4, { message: "User name must be 4 character" }).nonempty("Username is required!"),
    email: z.string().email({ message: "Invalid email formate" }).trim().toLowerCase().nonempty("Email is required!"),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/\d/, "Password must contain at least one number")
        .regex(/[!@#$%^&*()_\-+\[\]{}:;'",.<>\/?\\|`~]/, "Password must contain at least one special character").nonempty("Password is required!"),
    phone: z.string().regex(
        /^(?:\+8801|8801|01)[3-9]\d{8}$/,
        "Invalid Bangladeshi phone number"
    ).nonempty("Phone is required")
});


export const updateUserZodSchema = z.object({
    userName: z.string({ invalid_type_error: "User name must be string!" }).min(4, { message: "User name must be 4 character" }).optional(),
    email: z.string().email({ message: "Invalid email formate" }).trim().toLowerCase().optional(),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/\d/, "Password must contain at least one number")
        .regex(/[!@#$%^&*()_\-+\[\]{}:;'",.<>\/?\\|`~]/, "Password must contain at least one special character").optional(),
    phone: z.string().regex(
        /^(?:\+8801|8801|01)[3-9]\d{8}$/,
        "Invalid Bangladeshi phone number"
    ).optional(),
    photo : z.string().optional(),
    address : z.string().optional(),
    role : z.nativeEnum(Role , {invalid_type_error : "Invalid role"}).optional()
})