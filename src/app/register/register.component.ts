import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  password: any;
  formGroup: FormGroup;
  constructor() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/[0-9]+/),
      ]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
