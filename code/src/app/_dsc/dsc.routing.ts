import { Routes } from '@angular/router';

import { MysqlWebComponent } from './mysql.web.component';
import { MongodbWebComponent } from './mongodb.web.component';
import { RedisWebComponent } from './redis.web.component';
import { MinioWebComponent } from './minio.web.component';
import { DgraphWebComponent } from './dgraph.web.component';

export const DSCRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mysql/web',
        component: MysqlWebComponent,
        data: {
          title: 'MySQL',
          urls: [
            { title: 'Web', url: '/web' },
            { title: 'MySQL' }
          ]
        }
      },
      {
        path: 'mongodb/web',
        component: MongodbWebComponent,
        data: {
          title: 'MongoDB',
          urls: [
            { title: 'Web', url: '/web' },
            { title: 'MongoDB' }
          ]
        }
      },
      {
        path: 'redis/web',
        component: RedisWebComponent,
        data: {
          title: 'Redis',
          urls: [
            { title: 'Web', url: '/web' },
            { title: 'Redis' }
          ]
        }
      },
      {
        path: 'minio/web',
        component: MinioWebComponent,
        data: {
          title: 'MinIO',
          urls: [
            { title: 'Web', url: '/web' },
            { title: 'MinIO' }
          ]
        }
      },
      {
        path: 'dgraph/web',
        component: DgraphWebComponent,
        data: {
          title: 'DGraph',
          urls: [
            { title: 'Web', url: '/web' },
            { title: 'DGraph' }
          ]
        }
      },
    ]
  }
];
