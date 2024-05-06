import { Injectable, inject } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BASE_URL } from './api.service';
import { UserSessionService } from './user-session.service';

@Injectable()
export class WebSocketService {
    private userSessionService = inject(UserSessionService)

    private webSocket: Socket

    constructor() {
        this.webSocket = new Socket({
            url: BASE_URL,
            options: {
                extraHeaders: {
                    Authorization: this.userSessionService.accessToken
                },
            },
        })
    }

    connect() {
        this.webSocket.connect()
    }

    disconnect() {
        this.webSocket.disconnect()
    }
}