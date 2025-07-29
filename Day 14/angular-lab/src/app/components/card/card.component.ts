import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [UpperCasePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  show = true;
  imagePath: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s';

  name: string = 'hazem';
  jobTitle: string = 'Web designer';
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  deleteCard() {
    this.show = false;
  }
}
