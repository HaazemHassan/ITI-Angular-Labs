import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsersService, User } from '../../services/users.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent implements OnInit {
  user: User | undefined;
  userId!: number | null;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.userId = idParam !== null ? parseInt(idParam) : null;
    if (this.userId && this.userId > 4) {
      this.usersService.getUserById(this.userId).subscribe((u) => {
        this.user = u;
      });
    }
  }

  goBack() {
    this.router.navigate(['/users']);
  }
}
