import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotFoundComponent } from './404/not-found.component';
import { LockComponent } from './lock/lock.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { AuthRoutes } from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NotFoundComponent,
    SigninComponent,
    SignupComponent,
    LockComponent,
  ]
})
export class AuthModule {}
