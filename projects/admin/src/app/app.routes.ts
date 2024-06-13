import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./account/account.module').then(m=>m.AccountModule),
    pathMatch: 'full',
  }
];
