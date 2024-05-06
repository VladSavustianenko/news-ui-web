import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { AccessToken } from "../models/login";

@Injectable({
    providedIn: 'root'
})
export class UserSessionService {
    get user() : User {
        const user = localStorage.getItem('user')
        if (user) {
            return JSON.parse(user)
        }
        
        return {} as User
    }

    set user(user: User) {
        localStorage.setItem('user', JSON.stringify(user))
    }

    get accessToken(): AccessToken {
        return localStorage.getItem('accessToken') || ''
    }

    set accessToken(token: string) {
        localStorage.setItem('accessToken', token)
    }

    clearSession() {
        localStorage.removeItem('user')
        localStorage.removeItem('accessToken')
    }
}