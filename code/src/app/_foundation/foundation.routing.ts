import { Routes } from '@angular/router';

import { MicroWebComponent } from './micro.web.component';

export const FoundationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'micro/web',
        component: MicroWebComponent,
        data: {
          title: 'Micro',
          urls: [
            { title: 'Web', url: '/web' },
            { title: 'Micro' }
          ]
        }
      },
    ]
  }
];
