import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CPNPageRoutingModule } from './cpn-routing.module';

import { CPNPage } from './cpn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CPNPageRoutingModule
  ],
  declarations: [CPNPage]
})
export class CPNPageModule {}
