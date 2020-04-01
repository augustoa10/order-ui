import {Component, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Observable, throwError, Subscription } from 'rxjs';

import { DeviceService } from '../services/device.service';
import { Plan } from '../models/plan.model';
import { PlanService } from '../services/plan.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'register-component',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit, OnChanges {
    userFormGroup: FormGroup;
    orderFormGroup: FormGroup;
    filteredDeviceModels: Observable<string[]>;
    isEditable = false;
    isLoading = false;
    deviceModelSubscription: Subscription;

    deviceModels: string[] = [];
    plans: Plan[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private deviceService: DeviceService,
        private planService: PlanService,
    ) {}

    ngOnInit() {
        this.fetchPlans();

        this.userFormGroup = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            cpf: ['', Validators.required]
        });
        this.orderFormGroup = this.formBuilder.group({
            userId: ['', Validators.required],
            planId: ['', Validators.required],
            deviceModel: ['', Validators.required],
            deviceImei: ['', Validators.required],
            installments: ['', Validators.required]
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.orderFormGroup.get('deviceModel').valueChanges.subscribe((model) => {
            this.fetchDeviceModel(model);
        });
    }

    get deviceModelControl(): FormControl {
        return this.orderFormGroup.get('deviceModel') as FormControl;
    }

    private fetchDeviceModel(model: string): void {
        if (!this.orderFormGroup) { return; }

        this.isLoading = true;

        this.deviceModelControl.disable({ emitEvent: false });

        this.deviceService.listDeviceModels(model)
            .then((devices) => {
                this.deviceModels = devices;
                if (devices.length > 0) { this.deviceModelControl.enable(); }
                this.isLoading = false;
            })
            .then(err => {
                console.error(err);
                return throwError(err);
            });
    }

    private fetchPlans(): void {
        this.planService.listAll().then(plans => {
            this.plans = plans;
        });
    }
}
