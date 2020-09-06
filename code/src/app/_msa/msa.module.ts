import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartistModule } from 'ng-chartist';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MSARoutes } from './msa.routing';

import { LicenseDashboardComponent } from './license/dashboard.component';
import { LicenseSpaceComponent } from './license/space.component';
import { LicenseKeyComponent } from './license/key.component';
import { LicenseCertificateComponent } from './license/certificate.component';
import { LicenseService } from './service/license.service';
import { AccountDashboardComponent } from './account/dashboard.component';
import { AnalyticsAgentComponent } from './analytics/agent.component';
import { AnalyticsService } from './service/analytics.service';
import { AccountRetrievalComponent } from './account/retrieval.component';
import { AccountUpdateComponent } from './account/update.component';
import { AccountCreateComponent } from './account/create.component';
import { AccountService } from './service/account.service';
import { ActivityDashboardComponent } from './activity/dashboard.component';
import { ActivityChannelComponent } from './activity/channel.component';
import { ActivityRecordComponent } from './activity/record.component';
import { ActivityService } from './service/activity.service';
import { FileBucketComponent } from './file/bucket.component';
import { FileObjectComponent } from './file/object.component';
import { FileService } from './service/file.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    Ng2SmartTableModule,
    RouterModule.forChild(MSARoutes)
  ],
  declarations: [
    LicenseDashboardComponent,
    LicenseSpaceComponent,
    LicenseKeyComponent,
    LicenseCertificateComponent,
    AnalyticsAgentComponent,
    AccountDashboardComponent,
    AccountRetrievalComponent,
    AccountUpdateComponent,
    AccountCreateComponent,
    ActivityDashboardComponent,
    ActivityChannelComponent,
    ActivityRecordComponent,
    FileBucketComponent,
    FileObjectComponent,
  ],
  providers:[
    LicenseService,
    AnalyticsService,
    AccountService,
    ActivityService,
    FileService,
  ]
})
export class MSAModule {}
