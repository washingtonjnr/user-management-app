import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@app/shared/layout/dash/dash-layout.routes').then((m) => m.DASH_LAYOUT_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('@app/shared/layout/auth/auth-layout.routes').then((m) => m.AUTH_LAYOUT_ROUTES),
  },
  { path: '**', redirectTo: '/auth/login' },
];
