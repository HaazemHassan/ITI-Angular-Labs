import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-login-btn',
  imports: [],
  templateUrl: './login-btn.html',
  styleUrl: './login-btn.css',
 
})
export class LoginBtn {
  userService=inject(UserService)
  login():void{
    alert("Login");
    // this.userService.isLoggedIn=true;
  }
}
