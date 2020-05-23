import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { AuthGuard } from './_guards/auth.guard'
import { Role } from './_models/role.model'

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
      {
        path: 'bla',
        loadChildren: './_bla/bla.module#BLAModule'
      },
      {
        path: 'msa',
        loadChildren: './_msa/msa.module#MSAModule'
      },
      {
        path: 'src',
        loadChildren: './_src/src.module#SRCModule'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboards/dashboard.module#DashboardModule'
      },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      },
      { path: 'icons', loadChildren: './icons/icons.module#IconsModule' },
      { path: 'forms', loadChildren: './form/forms.module#FormModule' },
      { path: 'tables', loadChildren: './table/tables.module#TablesModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartModule' },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'extra-component',
        loadChildren:
          './extra-component/extra-component.module#ExtraComponentsModule'
      },
      { path: 'apps', loadChildren: './apps/apps.module#AppsModule' },
      {
        path: 'apps/email',
        loadChildren: './apps/email/mail.module#MailModule'
      },
      {
        path: 'sample-pages',
        loadChildren: './sample-pages/sample-pages.module#SamplePagesModule'
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'auth',
        loadChildren:
          './_auth/auth.module#AuthModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
