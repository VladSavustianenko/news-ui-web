import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http"
import { Injectable, inject } from "@angular/core"
import { Router } from "@angular/router"
import { Observable, catchError, of } from "rxjs"

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    private router = inject(Router)

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((err: any) => {
                if (err.status === 400 || err.status === 404) {
                    this.router.navigate(['/'])
                }

                return of(err)
            })
        )
    }
}