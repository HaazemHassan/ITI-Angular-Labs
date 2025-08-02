import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Aboutus } from './pages/aboutus/aboutus';
import { NotFound } from './pages/not-found/not-found';
import { Profile } from './components/profile/profile';
import { Dashboard } from './pages/dashboard/dashboard';
import { LoginPage } from './pages/login-page/login-page';
import { authGuard } from './guards/auth-guard-guard';
import { Observables } from './components/observables/observables';
import { ApiCall } from './components/api-call/api-call';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: Aboutus },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'login', component: LoginPage },
  { path: 'obs', component: Observables },
  { path: 'api', component: ApiCall },
  { path: 'profile/:profileId', component: Profile },
  { path: '**', component: NotFound },
];
