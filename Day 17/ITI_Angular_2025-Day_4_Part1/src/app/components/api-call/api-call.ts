import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface, UserService } from '../../services/user-service';

@Component({
  selector: 'app-api-call',
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './api-call.html',
  styleUrl: './api-call.css',
})
export class ApiCall {
  // users: any[] = [];
  // usersSignal = signal([]);

  // HttpClient ,
  // Service HttpClientService =>  get, post, patch, delete,put

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe()
    // this.users$ = this.http.get(users_endpoint);
    // .subscribe((usersFromBackend: any) => {
    //   this.usersSignal.set( usersFromBackend) ;

    //   // console.log(this.users)
    // });

    // To Get a value from Observable
    // 1- Subscribe
    // 2- Async pipe

    // fetch(users_endpoint)
    //   .then((res) => res.json())
    //   .then((val) => console.log(val));
  }

  addUserHandler(name:string,email:string): void {
    if(!name ||!email){
      console.log("No Data Entered!")
      return
    }

    const user: UserInterface = {
      // id: 3,
      email: email,
      name:name,
    };
    console.log('Add User');
    this.userService.addUser(user).subscribe(response=>{
      console.log(response);
    });
  }
}
