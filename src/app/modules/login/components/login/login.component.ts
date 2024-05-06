import { Component, inject, signal } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../../services/login.service";
import { LoginData, LoginSuccessResponse, SignupData } from "../../../core/models/login";
import { UserSessionService } from "../../../core/services/user-session.service";
import { Router } from "@angular/router";

const FORM_TYPE = {
    login: 0,
    newAccount: 1,
} as const

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    private loginService = inject(LoginService)
    private userSessionService = inject(UserSessionService)
    private router = inject(Router)

    public readonly FORM_TYPE = FORM_TYPE
    public currentState: typeof FORM_TYPE[keyof (typeof FORM_TYPE)] = FORM_TYPE.login

    public loginForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    })

    public createForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        passwordConfirm: new FormControl('', [Validators.required]),
    })

    public errorMessage = signal(null)

    toLoginForm() {
        this.errorMessage.set(null)
        this.createForm.reset()
        this.currentState = FORM_TYPE.login
    }

    toCreateForm() {
        this.errorMessage.set(null)
        this.loginForm.reset()
        this.currentState = FORM_TYPE.newAccount
    }

    login() {
        this.errorMessage.set(null)
        this.loginService.login(this.loginForm.value as LoginData).subscribe({
            next: (resp: LoginSuccessResponse) => {
                if (resp.accessToken && resp.user) {
                    this.userSessionService.user = resp.user
                    this.userSessionService.accessToken = resp.accessToken
                    this.router.navigate(['news'])
                }
            },
            error: e => {
                if (e.error.message) {
                    this.errorMessage.set(e.error.message)
                }
            },
        })
    }

    createUser() {
        this.errorMessage.set(null)
        this.loginService.signup(this.createForm.value as SignupData).subscribe({
            next: (resp: LoginSuccessResponse) => {
                if (resp.accessToken && resp.user) {
                    this.userSessionService.user = resp.user
                    this.userSessionService.accessToken = resp.accessToken
                    this.router.navigate(['news'])
                }
            },
            error: e => {
                if (e.error.message) {
                    this.errorMessage.set(e.error.message)
                }
            },
        })
    }
}