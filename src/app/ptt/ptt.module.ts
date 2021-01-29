import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PTTPageRoutingModule } from './ptt-routing.module';

import { PTTPage } from './ptt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PTTPageRoutingModule
  ],
  declarations: [PTTPage]
})
export class PTTPageModule {}
