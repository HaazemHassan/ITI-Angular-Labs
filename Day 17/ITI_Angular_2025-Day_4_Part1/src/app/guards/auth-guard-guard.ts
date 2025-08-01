import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user-service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const isLoggedIn = userService.isLoggedIn;

  const router=inject(Router)


  if (isLoggedIn) {
    return true;
  } else {
    router.navigate(['/login'])
    return false;
  }
};
