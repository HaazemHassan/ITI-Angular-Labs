import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {
  subscription!: Subscription;
  myForm!: FormGroup;

  ngOnInit() {
    const storedFormData = window.localStorage.getItem('formData');
    const formData = storedFormData ? JSON.parse(storedFormData) : {};

    this.myForm = new FormGroup({
      userName: new FormControl(formData.userName || '', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl(formData.email || '', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(formData.password || '', [Validators.required]),
    });
  }

  get userNameControl() {
    return this.myForm.get('userName');
  }

  get emailControl() {
    return this.myForm.get('email');
  }
  get passwordControl() {
    return this.myForm.get('password');
  }

  submit() {
    if (this.myForm.valid) {
      const myFormStringified = JSON.stringify(this.myForm.value);
      window.localStorage.setItem('formData', myFormStringified);
      this.myForm.reset();
    }
  }
}
