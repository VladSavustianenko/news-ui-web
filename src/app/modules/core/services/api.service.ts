import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

export const BASE_URL = 'https://web-news-engine-46cef28b089e.herokuapp.com'

@Injectable()
export class ApiServise {
    private http = inject(HttpClient)

    private TARGET = BASE_URL

    protected get(url: string, params = {}) {
        return this.http.get(this.TARGET + url, { params: params})
    }

    protected post(url: string, body: Object) {
        return this.http.post(this.TARGET + url, body)
    }
}