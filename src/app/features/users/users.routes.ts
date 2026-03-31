import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('@features/users/presentation/components/home/home.component').then((m) => m.HomeComponent),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
