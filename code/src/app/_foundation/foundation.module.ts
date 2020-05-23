import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FoundationRoutes } from './foundation.routing';
import { MicroWebComponent } from './micro.web.component';
import { SharedModule } from 'app/_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    RouterModule.forChild(FoundationRoutes)
  ],
  declarations: [
    MicroWebComponent,
  ]
})
export class FoundationModule {}
