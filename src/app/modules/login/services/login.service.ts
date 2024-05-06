import { Injectable, inject } from "@angular/core";
import { ApiServise } from "../../core/services/api.service";
import { LoginData, LoginSuccessResponse, SignupData } from "../../core/models/login";
import { Observable } from "rxjs";
import { UserSessionService } from "../../core/services/user-session.service";
import { Router } from "@angular/router";

@Injectable()
export class LoginService extends ApiServise {
    private userSessionService = inject(UserSessionService)
    private router = inject(Router)

    login(data: LoginData) {
        return this.post('/api/user/login', data) as Observable<LoginSuccessResponse>
    }

    signup(data: SignupData) {
        return this.post('/api/user/create', data) as Observable<LoginSuccessResponse>
    }

    logout() {
        return this.post('/api/user/logout', {}).subscribe(() => {
            this.userSessionService.clearSession()
            this.router.navigate(['login'])
        })
    }
}