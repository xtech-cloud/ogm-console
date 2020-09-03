import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DSCRoutes } from './dsc.routing';
import { MysqlWebComponent } from './mysql.web.component';
import { MongodbWebComponent } from './mongodb.web.component';
import { RedisWebComponent } from './redis.web.component';
import { DgraphWebComponent } from './dgraph.web.component';
import { MinioWebComponent } from './minio.web.component';
import { SharedModule } from 'app/_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    RouterModule.forChild(DSCRoutes)
  ],
  declarations: [
    MysqlWebComponent,
    MongodbWebComponent,
    RedisWebComponent,
    DgraphWebComponent,
    MinioWebComponent,
  ]
})
export class DSCModule {}
