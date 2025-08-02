import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface User {
  id: number;
  imagePath: string;
  name: string;
  email: string;
  website: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users: User[] = [];

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users) =>
          users
            .filter((user) => user.id > 4)
            .map((user) => ({
              id: user.id,
              imagePath:
                'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg',
              name: user.name,
              email: user.email,
              website: `https://www.${user.website}`,
            }))
        )
      );
  }
  getUserById(id: number): Observable<User | undefined> {
    return this.httpClient
      .get<User | undefined>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(
        map((user) =>
          user
            ? {
                id: user.id,
                imagePath:
                  'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg',
                name: user.name,
                email: user.email,
                website: `https://www.${user.website}`,
              }
            : undefined
        )
      );
  }

  // deleteUser(user: User): void {
  //   this.users = this.users.filter((u) => u.id !== user.id);
  // }
}
