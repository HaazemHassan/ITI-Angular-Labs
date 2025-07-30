import { UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../services/users.service';

@Component({
  selector: 'app-card',
  imports: [UpperCasePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() user!: User;
  @Input() isLast: boolean = false;
  @Output() remove: EventEmitter<User> = new EventEmitter<User>();

  onRemoveClick() {
    this.remove.emit(this.user);
  }
}
