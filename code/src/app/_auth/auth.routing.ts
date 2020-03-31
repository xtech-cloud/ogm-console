import { Routes } from '@angular/router';

import { NotFoundComponent } from './404/not-found.component';
import { LockComponent } from './lock/lock.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotFoundComponent
      },
      {
        path: 'lock',
        component: LockComponent
      },
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];
