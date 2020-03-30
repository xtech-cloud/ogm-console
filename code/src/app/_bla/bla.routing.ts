import { Routes } from '@angular/router';

import { QueueComponent } from './mlb/queue/queue.component';
import { HistoryComponent } from './mlb/history/history.component';

export const BLARoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mlb/queue',
        component: QueueComponent,
        data: {
          title: 'Queue',
          urls: [
            { title: 'MLB', url: '/mlb' },
            { title: 'Queue' }
          ]
        }
      },
      {
        path: 'mlb/history',
        component: HistoryComponent,
        data: {
          title: 'History',
          urls: [
            { title: 'MLB', url: '/mlb' },
            { title: 'Queue' }
          ]
        }
      }
    ]
  }
];
