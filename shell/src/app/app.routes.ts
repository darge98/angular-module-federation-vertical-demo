import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'angular-hello',
    loadComponent: () => import('angularMicrofrontend/HelloByAngularComponent').then(m => m.HelloByAngularComponent)
  }
];
