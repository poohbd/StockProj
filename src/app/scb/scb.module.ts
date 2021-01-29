import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SCBPageRoutingModule } from './scb-routing.module';

import { SCBPage } from './scb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SCBPageRoutingModule
  ],
  declarations: [SCBPage]
})
export class SCBPageModule {}
