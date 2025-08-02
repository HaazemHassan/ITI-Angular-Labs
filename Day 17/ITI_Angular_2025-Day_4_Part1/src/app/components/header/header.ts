import { Component, inject } from '@angular/core';
import { UserInterface, UserService } from '../../services/user-service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  userService = inject(UserService);
  constructor() {
  }


  routes = [
    { path: 'home', title: 'My Home' },
    { path: 'about', title: 'About Us' },
    { path: 'articles', title: 'Articles' },
    { path: 'dashboard', title: 'Dashboard' },
  ];
}
