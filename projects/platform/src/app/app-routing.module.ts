import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'demo',
    loadComponent: ()=>  import('./demo/demo.component').then(c=>c.DemoComponent)
  },
  {
    path: 'demo2',
    loadComponent: ()=>  import('./demo2/demo2.component').then(c=>c.Demo2Component)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
