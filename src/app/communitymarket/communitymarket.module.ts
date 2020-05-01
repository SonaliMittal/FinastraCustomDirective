import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunitymarketRoutingModule } from './communitymarket-routing.module';
import { CommunitymarketComponent } from './communitymarket.component';


@NgModule({
  declarations: [CommunitymarketComponent],
  imports: [
    CommonModule,
    CommunitymarketRoutingModule
  ]
})
export class CommunitymarketModule { }
