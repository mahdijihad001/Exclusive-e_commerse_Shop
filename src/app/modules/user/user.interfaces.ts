export enum Role{
    USER = "USER",
    ADMIN = "ADMIN",
    SUPERADMIN = "SUPERADMIN"
}

export interface IUser{
    _id ?: string,
    userName : string,
    email : string,
    password : string,
    phone : string,
    photo? : string,
    address? : string,
    role ?: Role
}