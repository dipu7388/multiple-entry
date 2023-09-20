import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'demo',
    loadComponent: ()=>  import('./demo/demo.component').then(c=>c.DemoComponent)
  },
  {
    path: 'demo2',
    loadComponent: ()=>  import('./demo2/demo2.component').then(c=>c.Demo2Component)
  },
  {
    path: 'admin',
    loadChildren: ()=>loadRemoteModule({
      type: 'module',
      remoteEntry: `http://localhost:4202/remoteEntry.js`,
      exposedModule: './MfWrapperModule',
    }).then((m) => m.MfWrapperModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
