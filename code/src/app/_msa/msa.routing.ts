import { Routes } from '@angular/router';

import { LicenseDashboardComponent } from './license/dashboard.component';
import { LicenseSpaceComponent } from './license/space.component';
import { LicenseKeyComponent } from './license/key.component';
import { LicenseCertificateComponent } from './license/certificate.component';
import { AnalyticsAgentComponent } from './analytics/agent.component';
import { AccountRetrievalComponent } from './account/retrieval.component';
import { AccountDashboardComponent } from './account/dashboard.component';

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
    ]
  }
];
