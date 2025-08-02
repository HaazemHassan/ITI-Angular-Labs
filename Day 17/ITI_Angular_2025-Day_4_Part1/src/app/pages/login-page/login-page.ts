import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  constructor(private userService: UserService) {}
  login(): void {
    this.userService.isLoggedIn = true;
  }
}
