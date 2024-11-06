
export interface ILoginPayload {
    email: string;
    password: string;
}

export type TLoginService = (payload: ILoginPayload) => Promise<string>

export interface ISignupPayload {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export type TSignupService = (payload: ISignupPayload) => Promise<string>

export interface IGetUserResponse {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    isVerified: boolean;
}

export type TGetUserService = () => Promise<IGetUserResponse>
