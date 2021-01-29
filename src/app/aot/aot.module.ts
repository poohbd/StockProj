import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AOTPageRoutingModule } from './aot-routing.module';

import { AOTPage } from './aot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AOTPageRoutingModule
  ],
  declarations: [AOTPage]
})
export class AOTPageModule {}
