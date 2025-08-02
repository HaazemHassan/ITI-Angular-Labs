import { Component, inject } from '@angular/core';
import { Header } from './components/header/header';
import { UserService } from './services/user-service';
import { Home } from "./pages/home/home";
import { Aboutus } from "./pages/aboutus/aboutus";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Home, Aboutus, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Api Call => Users => User => Card

  userService = inject(UserService);

  userName: string = 'Sameh';
  bio: string = 'BIO Text';

  dataFromChild: string = 'No Data';

  onUserRemovedHandler(userName: string): void {
    // console.log(userName)

    this.dataFromChild = ` ${userName} Removed! `;
  }
}
