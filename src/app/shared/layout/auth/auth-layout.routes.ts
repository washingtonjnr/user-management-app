import { Routes } from '@angular/router';

export const AUTH_LAYOUT_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
];
