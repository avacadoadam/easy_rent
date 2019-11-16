import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordValidation} from './MatchPasswordValidator';

@Component({
  selector: 'app-email-register',
  templateUrl: './email-register.component.html',
  styleUrls: ['./email-register.component.scss']
})
export class EmailRegisterComponent {
  @Output() email = new EventEmitter<object>();

  error: string;
  rForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      retypePassword: [null]
    }, {validator: PasswordValidation.MatchPassword});
  }

  submit() {
    console.log(this.rForm.value);
    console.log(this.rForm.valid);
    if (this.rForm.valid) {
      this.email.emit(this.rForm.value);
    }
    return;
  }
}
