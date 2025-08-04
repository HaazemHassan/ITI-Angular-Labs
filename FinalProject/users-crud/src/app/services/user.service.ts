import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users = signal<User[]>([]);

  constructor() {
    this.loadUsersFromLocalStorage();
  }
  get users() {
    return this._users;
  }

  addUser(user: User) {
    const current = this._users();
    user.id = current.length ? current[current.length - 1].id + 1 : 1;
    this._users.set([...current, user]);
    this.saveUsersToLocalStorage();
  }

  deleteUser(userId: number) {
    this._users.set(this._users().filter((u) => u.id !== userId));
    this.saveUsersToLocalStorage();
  }

  updateUser(updatedUser: User) {
    const updated = this._users().map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );
    this._users.set(updated);
    this.saveUsersToLocalStorage();
  }

  private saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this._users()));
  }

  private loadUsersFromLocalStorage() {
    const users = localStorage.getItem('users');
    if (users) {
      this._users.set(JSON.parse(users));
    }
  }
}
