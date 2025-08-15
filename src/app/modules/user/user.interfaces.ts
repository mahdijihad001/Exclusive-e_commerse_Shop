export enum Role{
    USER = "USER",
    ADMIN = "ADMIN",
    SUPERADMIN = "SUPERADMIN"
}

export interface IUser{
    userName : string,
    email : string,
    password : string,
    phone : string,
    photo? : string,
    address? : string,
    role ?: Role
}