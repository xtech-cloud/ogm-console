import { Routes } from '@angular/router';

import { ConsulComponent } from './consul.component';

export const SRCRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'nc/consul',
        component: ConsulComponent,
        data: {
          title: 'Consul',
          urls: [
            { title: 'NC', url: '/nc' },
            { title: 'Consul' }
          ]
        }
      },
    ]
  }
];
