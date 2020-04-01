import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApiHttpClientService } from './services/api-http-client.service';

import { UserService } from './services/user.service';
import { DeviceService } from './services/device.service';
import { PlanService } from './services/plan.service';
import { RegisterComponent } from './components/register.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterModule } from './components/register.module';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule,
        RegisterModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        ApiHttpClientService,
        UserService,
        DeviceService,
        PlanService
    ],
    exports: [
        MaterialModule,
        RegisterModule,
    ],
})
export class CoreModule { }
