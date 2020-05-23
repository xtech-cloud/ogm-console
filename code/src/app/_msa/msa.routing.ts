import { Routes } from '@angular/router';

import { LicenseSpaceComponent } from './license/space.component';
import { LicenseKeyComponent } from './license/key.component';
import { LicenseCertificateComponent } from './license/certificate.component';

export const MSARoutes: Routes = [
  {
    path: '',
    children: [
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
    ]
  }
];
