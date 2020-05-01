import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunitymarketComponent } from './communitymarket.component';

const routes: Routes = [{ path: '', component: CommunitymarketComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunitymarketRoutingModule { }
