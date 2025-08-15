import { model, Schema } from "mongoose";
import { IUser, Role } from "./user.interfaces";
import bcrypt from "bcryptjs";

const userSchema = new Schema<IUser>({
    userName: {
        type: String,
        requied: [true, "UserName must be required!"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password must be required"]
    },
    photo: {
        type: String
    },
    address: {
        type: String
    },
    role: {
        type: String,
        required: String,
        default: Role.USER
    }

}, { timestamps: true, versionKey: false });


const User = model<IUser>("User", userSchema);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

export default User