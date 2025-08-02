import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLoggedIn: boolean = false;
  users = signal<UserInterface[]>([]);
  // getUserById(id: number) {
  //   return this.users.find((el) => el.id == id);
  // }
  users_endpoint = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.users_endpoint).pipe(
      tap((users) => {
        this.users.set(users);
      })
    );
  }

  addUser(user: UserInterface): Observable<any> {
    return this.http.post<UserInterface>(this.users_endpoint, user).pipe(
      tap(() => {
        this.getUsers().subscribe();
        // this.users.update((oldUsers) => [...oldUsers, user]);
      })
    );
  }
}

export interface UserInterface {
  id?: number;
  name: string;
  email: string;
}
