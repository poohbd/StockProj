import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PTTEPPageRoutingModule } from './pttep-routing.module';

import { PTTEPPage } from './pttep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PTTEPPageRoutingModule
  ],
  declarations: [PTTEPPage]
})
export class PTTEPPageModule {}
