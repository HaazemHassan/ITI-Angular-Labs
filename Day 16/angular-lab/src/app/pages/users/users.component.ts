import { Component } from '@angular/core';
import { UsersService, User } from '../../services/users.service';
import { CardComponent } from '../../components/card/card.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CardComponent, NgClass],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: User[] = [];
  filteredUsers: User[] = [];

  constructor(private usersService: UsersService) {
    this.users = this.usersService.users;
    this.filteredUsers = [...this.users];
  }

  removeUser(user: User): void {
    this.usersService.deleteUser(user);
    this.users = this.usersService.users;
    this.filteredUsers = [...this.users];
  }

  onSearchBarTextChange(event: Event): void {
    const searchText = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(searchText)
    );
  }
}
