import { AccountComponent } from './account.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: AccountComponent,
      pathMatch: 'full',
    }]),
    AccountComponent
  ]
})
export class AccountModule { }
