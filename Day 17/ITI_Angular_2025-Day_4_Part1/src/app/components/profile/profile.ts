import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from './../../services/user-service';

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  activatedRotue = inject(ActivatedRoute);
  user: any;
  constructor(private userService: UserService,private router:Router) {}

  ngOnInit(): void {
    const profileId = this.activatedRotue.snapshot.params['profileId'];
    // this.user = this.userService.getUserById(profileId);


    // setTimeout(() => {
    //   this.router.navigate(['/home'])
    // }, 3000);
  }

  backToHome():void{
    this.router.navigate(['home'])
  }
}
