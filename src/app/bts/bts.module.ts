import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BTSPageRoutingModule } from './bts-routing.module';

import { BTSPage } from './bts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BTSPageRoutingModule
  ],
  declarations: [BTSPage]
})
export class BTSPageModule {}
