import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user.model';
import { AppConfig } from '../_config/app.config'

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${AppConfig.settings.api.ams}/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`${AppConfig.settings.api.ams}/users/${id}`);
    }

}
