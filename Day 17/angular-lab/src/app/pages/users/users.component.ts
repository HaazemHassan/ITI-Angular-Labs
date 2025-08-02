import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService, User } from '../../services/users.service';
import { CardComponent } from '../../components/card/card.component';
import { NgClass } from '@angular/common';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  imports: [CardComponent, NgClass],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  filteredUsers: User[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    const usersSubscription = this.usersService
      .getUsers()
      .pipe(map((users) => users.filter((user) => user.id > 4)))
      .subscribe((users) => {
        this.users = users;
        this.filteredUsers = [...this.users];
      });

    this.subscription = usersSubscription;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeUser(user: User): void {
    this.users = this.users.filter((u) => u.id !== user.id);
    this.filteredUsers = [...this.users];
  }

  onSearchBarTextChange(event: Event): void {
    const searchText = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(searchText)
    );
  }
}
