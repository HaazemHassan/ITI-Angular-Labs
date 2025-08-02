import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Card } from '../../components/card/card';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // users;

  constructor(private userService: UserService) {
    // this.users = this.userService.users;
  }
}
