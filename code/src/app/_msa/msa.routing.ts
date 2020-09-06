import { Routes } from '@angular/router';

import { LicenseDashboardComponent } from './license/dashboard.component';
import { LicenseSpaceComponent } from './license/space.component';
import { LicenseKeyComponent } from './license/key.component';
import { LicenseCertificateComponent } from './license/certificate.component';
import { AnalyticsAgentComponent } from './analytics/agent.component';
import { AccountRetrievalComponent } from './account/retrieval.component';
import { AccountUpdateComponent } from './account/update.component';
import { AccountCreateComponent } from './account/create.component';
import { AccountDashboardComponent } from './account/dashboard.component';
import { ActivityDashboardComponent } from './activity/dashboard.component';
import { ActivityChannelComponent } from './activity/channel.component';
import { ActivityRecordComponent} from './activity/record.component';
import { FileBucketComponent} from './file/bucket.component';
import { FileObjectComponent} from './file/object.component';

export const MSARoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'account/dashboard',
        component: AccountDashboardComponent,
        data: {
          title: 'Dashboard',
          urls: [
            { title: 'Account', url: '/account' },
            { title: 'Dashboard' }
          ]
        }
      },
      {
        path: 'account/retrieval',
        component: AccountRetrievalComponent,
        data: {
          title: 'Retrieval',
          urls: [
            { title: 'Account', url: '/account' },
            { title: 'Retrieval' }
          ]
        }
      },
      {
        path: 'account/update',
        component: AccountUpdateComponent,
        data: {
          title: 'Update',
          urls: [
            { title: 'Account', url: '/account' },
            { title: 'Update' }
          ]
        }
      },
      {
        path: 'account/create',
        component: AccountCreateComponent,
        data: {
          title: 'Create',
          urls: [
            { title: 'Account', url: '/account' },
            { title: 'Create' }
          ]
        }
      },
      {
        path: 'license/dashboard',
        component: LicenseDashboardComponent,
        data: {
          title: 'Dashboard',
          urls: [
            { title: 'License', url: '/license' },
            { title: 'Dashboard' }
          ]
        }
      },
      {
        path: 'license/space',
        component: LicenseSpaceComponent,
        data: {
          title: 'Space',
          urls: [
            { title: 'License', url: '/license' },
            { title: 'Space' }
          ]
        }
      },
      {
        path: 'license/key',
        component: LicenseKeyComponent,
        data: {
          title: 'Key',
          urls: [
            { title: 'License', url: '/license' },
            { title: 'Key' }
          ]
        }
      },
      {
        path: 'license/certificate',
        component: LicenseCertificateComponent,
        data: {
          title: 'Certificate',
          urls: [
            { title: 'License', url: '/license' },
            { title: 'Certificate' }
          ]
        }
      },
      {
        path: 'analytics/agent',
        component: AnalyticsAgentComponent,
        data: {
          title: 'Agent',
          urls: [
            { title: 'Analytics', url: '/analytics' },
            { title: 'Agent' }
          ]
        }
      },
      {
        path: 'activity/dashboard',
        component: ActivityDashboardComponent,
        data: {
          title: 'Activity',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Activity' }
          ]
        }
      },
      {
        path: 'activity/channel',
        component: ActivityChannelComponent,
        data: {
          title: 'Activity',
          urls: [
            { title: 'Channel', url: '/channel' },
            { title: 'Activity' }
          ]
        }
      },
      {
        path: 'activity/record',
        component: ActivityRecordComponent,
        data: {
          title: 'Activity',
          urls: [
            { title: 'Record', url: '/record' },
            { title: 'Activity' }
          ]
        }
      },
      {
        path: 'file/bucket',
        component: FileBucketComponent,
        data: {
          title: 'File',
          urls: [
            { title: 'Bucket', url: '/bucket' },
            { title: 'File' }
          ]
        }
      },
      {
        path: 'file/object',
        component: FileObjectComponent,
        data: {
          title: 'File',
          urls: [
            { title: 'Object', url: '/object' },
            { title: 'File' }
          ]
        }
      },
    ]
  }
];
