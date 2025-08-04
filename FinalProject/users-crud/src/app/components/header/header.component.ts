import { Component, EventEmitter, Output } from '@angular/core';
import { SearchComponentComponent } from '../search-component/search-component.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  imports: [SearchComponentComponent, UserFormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() getSearchValue = new EventEmitter<string>();
  viewUserForm: boolean = false;

  onGetSearchValue(value: string) {
    this.getSearchValue.emit(value);
  }
}
