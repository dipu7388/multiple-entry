import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
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
    loadComponent: () => loadRemoteModule({
      exposedModule: './Component',
      remoteEntry: 'http://localhost:4201/remoteEntry.json',
      remoteName: 'admin'
    }).then((m) => m.AppComponent)
  }
];
