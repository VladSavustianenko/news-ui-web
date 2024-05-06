import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

export const BASE_URL = 'http://localhost:5000'

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