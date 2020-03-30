import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartistModule } from 'ng-chartist';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BLARoutes } from './bla.routing';

import { QueueComponent } from './mlb/queue/queue.component';
import { HistoryComponent } from './mlb/history/history.component';
import { MLBService } from './mlb/mlb.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    Ng2SmartTableModule,
    RouterModule.forChild(BLARoutes)
  ],
  declarations: [
    QueueComponent,
    HistoryComponent,
  ],
  providers:[
    MLBService,
  ]
})
export class BLAModule {}
