import {Component, ViewChild} from '@angular/core';
import {MatStepper} from '@angular/material';

@Component({
  selector: 'app-tenant-information',
  templateUrl: './tenant-information.component.html',
  styleUrls: ['./tenant-information.component.scss']
})
export class TenantInformationComponent {
  verify: any;
  addDocs: any;
  work: any;
  @ViewChild('stepper') stepper: MatStepper;

  constructor() {
  }

  nextStep() {
    console.log('next called');
    this.stepper.next();
  }
}
