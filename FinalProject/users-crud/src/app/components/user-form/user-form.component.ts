import { UserService } from './../../services/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user.interface';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent implements OnInit {
  @Input({ required: true }) formPurpose!: string;
  @Input() user: User | null = null;
  @Output() cancelForm: EventEmitter<void> = new EventEmitter();
  myForm!: FormGroup;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(this.user?.name || '', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(this.user?.email || '', [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  get nameControl() {
    return this.myForm.get('name');
  }

  get emailControl() {
    return this.myForm.get('email');
  }

  onCancel() {
    this.cancelForm.emit();
  }
  onSubmit() {
    if (this.myForm.valid) {
      if (this.formPurpose === 'Add') {
        const newUser: User = {
          ...this.myForm.value,
        };
        this.userService.addUser(newUser);
      } else {
        const updatedUser: User = {
          id: this.user?.id,
          ...this.myForm.value,
        };
        this.userService.updateUser(updatedUser);
      }
    }
    this.cancelForm.emit();
  }
}
