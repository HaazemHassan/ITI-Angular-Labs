import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UsersTableComponent } from './components/users-table/users-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UsersTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'students-crud';
  searchValue: string = '';

  onGetSearchValue(value: string) {
    this.searchValue = value;
  }
}
