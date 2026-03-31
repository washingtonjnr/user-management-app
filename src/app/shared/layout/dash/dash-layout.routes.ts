import { Routes } from '@angular/router';
import { DashLayoutComponent } from '@app/shared/layout/dash/dash-layout.component';

export const DASH_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: DashLayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('@features/users/users.routes').then((m) => m.USERS_ROUTES),
      },
      { path: '', redirectTo: 'users', pathMatch: 'full' },
    ],
  },
];
