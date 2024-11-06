
export interface ILoginPayload {
    email: string;
    password: string;
}

export type TLoginService = (payload: ILoginPayload) => Promise<string>
