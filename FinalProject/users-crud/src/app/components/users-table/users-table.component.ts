import { Component, computed, input, Input, signal } from '@angular/core';
import { User } from '../../models/user.interface';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css',
})
export class UsersTableComponent {
  viewUserForm: boolean = false;
  userToUpdate: User | null = null;
  showDeleteConfirm: boolean = false;
  userToDelete: User | null = null;

  users = signal<User[]>([]);

  searchValue = input<string>('');

  filteredUsers = computed(() =>
    this.users().filter(
      (u) =>
        u.name.toLowerCase().includes(this.searchValue().toLowerCase()) ||
        u.email.toLowerCase().includes(this.searchValue().toLowerCase())
    )
  );

  constructor(private userService: UserService) {
    this.users = userService.users;
  }

  onEditUser(user: User) {
    this.userToUpdate = user;
    this.viewUserForm = true;
  }

  onClickDelete(userId: number) {
    const userToDelete = this.users().find((user) => user.id === userId);
    if (userToDelete) {
      this.userToDelete = userToDelete;
      this.showDeleteConfirm = true;
    }
  }

  confirmDelete() {
    if (this.userToDelete) {
      this.userService.deleteUser(this.userToDelete.id);
      this.closeDeleteConfirm();
    }
  }

  closeDeleteConfirm() {
    this.showDeleteConfirm = false;
    this.userToDelete = null;
  }
}
