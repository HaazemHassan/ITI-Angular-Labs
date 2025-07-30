import { Component } from '@angular/core';

import { CardComponent } from './components/card/card.component';
import { UsersService, User } from './services/users.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CardComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = [];

  constructor(private usersService: UsersService) {
    this.users = this.usersService.users;
  }

  removeUser(user: User): void {
    this.usersService.deleteUser(user);
  }

  onSearchBarTextChange(event: Event): void {
    const searchText = (event.target as HTMLInputElement).value.toLowerCase();
    this.users = this.usersService.users.filter((user) =>
      user.name.toLowerCase().includes(searchText)
    );
  }
}
