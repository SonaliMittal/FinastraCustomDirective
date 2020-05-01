import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'solutions', loadChildren: () => import('./solutions/solutions.module').then(m => m.SolutionsModule) },
  { path: 'communitymarket', loadChildren: () => import('./communitymarket/communitymarket.module').then(m => m.CommunitymarketModule) },
  { path: 'service', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) },
  { path: 'platform', loadChildren: () => import('./platform/platform.module').then(m => m.PlatformModule) },
  { path: 'career', loadChildren: () => import('./career/career.module').then(m => m.CareerModule) },  
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
