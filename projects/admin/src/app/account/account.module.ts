import { AccountComponent } from './account.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: AccountComponent,
      pathMatch: 'full',
    }]),
    AccountComponent
  ]
})
export class AccountModule { }
