import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: ()=> import('../account/account.module').then(m=>m.AccountModule),
        pathMatch: 'full',
      }
    ])
  ]
})
export class MfWrapperModule { }
