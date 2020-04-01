import { Injectable } from '@angular/core';

import { ApiHttpClientService } from './api-http-client.service';
import { Plan } from '../models/plan.model';

@Injectable()
export class PlanService {
    constructor(
        private apiHttpClient: ApiHttpClientService
    ) { }

    listAll(): Promise<Plan[]> {
        return this.apiHttpClient
            .get('/plans')
            .toPromise()
            .then(data => data.map(plan => this.fromJSON(plan)));
    }

    private fromJSON(json) {
        return new Plan({
            id: json['id'],
            name: json['name'],
            description: json['description'],
            yearlyPrice: json['yearly_price'],
        });
    }
}
