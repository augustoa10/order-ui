import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        RouterModule,
        ReactiveFormsModule,
        MaterialModule,
        CommonModule
    ],
    exports: [
        RegisterComponent
    ],
    declarations: [
        RegisterComponent
    ],
})
export class RegisterModule { }
