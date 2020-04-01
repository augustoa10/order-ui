import { Injectable } from '@angular/core';

import { ApiHttpClientService } from './api-http-client.service';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    constructor(
        private apiHttpClient: ApiHttpClientService
    ) { }

    create(user: User): Promise<number> {
        return this.apiHttpClient
            .post('/users', this.toJSON(user))
            .toPromise()
            .then(data => data.id);
    }

    private toJSON(user: User) {
        return {
            name: user.name,
            email: user.email,
            cpf: user.cpf,
        };
    }
}
