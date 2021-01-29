import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BEMPageRoutingModule } from './bem-routing.module';

import { BEMPage } from './bem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BEMPageRoutingModule
  ],
  declarations: [BEMPage]
})
export class BEMPageModule {}
