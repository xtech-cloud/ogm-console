import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SRCRoutes } from './src.routing';
import { ConsulComponent } from './consul.component';
import { SafePipe } from 'app/_pipe/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(SRCRoutes)
  ],
  declarations: [
    ConsulComponent,
    SafePipe,
  ]
})
export class SRCModule {}
