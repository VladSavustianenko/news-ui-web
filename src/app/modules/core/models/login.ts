import { User } from "./user"

export interface LoginData {
    name: string
    password: string
}

export interface SignupData extends LoginData {
    passwordConfirm: string
}

export type AccessToken = string

export interface LoginSuccessResponse {
    accessToken: AccessToken,
    user: User
}
