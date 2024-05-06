import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from "@angular/common/http"
import { Injectable, inject } from "@angular/core"
import { Router } from "@angular/router"
import { Observable, catchError, of } from "rxjs"
import { UserSessionService } from "./user-session.service"

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private router = inject(Router)
    private userSessionService = inject(UserSessionService)

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const authReq = request.clone({
            headers: new HttpHeaders({
              'Authorization': this.userSessionService.accessToken
            })
        });

        return next.handle(authReq).pipe(
            catchError((err: any) => {
                if (err.status === 401) {
                    this.userSessionService.clearSession()
                    this.router.navigate(['login'])
                }

                return of(err)
            })
        )
    }
}