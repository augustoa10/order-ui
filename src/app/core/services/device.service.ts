import { Injectable } from '@angular/core';

import { ApiHttpClientService } from './api-http-client.service';

@Injectable()
export class DeviceService {
    constructor(
        private apiHttpClient: ApiHttpClientService
    ) { }

    listDeviceModels(deviceModel: string): Promise<string[]> {
        return this.apiHttpClient
            .get('/devices', { params: { name: deviceModel }})
            .toPromise();
    }
}
