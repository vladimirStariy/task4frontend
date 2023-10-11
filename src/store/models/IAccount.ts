export interface IAccount {
    id: number;
    name: string;
    email: string;
    registeredAt: string;
    lastLogin: string;
    isBanned: boolean;
}

export interface IUserResponse {
    name: string,
    token: string,
    id: number
}

export interface IUser {
    name: string;
}

export interface ILoginRequest {
    email: string
    password: string
}

export interface IRegisterRequest {
    email: string
    name: string
    password: string
}

export interface IRangeRequest {
    selected: number[]
}