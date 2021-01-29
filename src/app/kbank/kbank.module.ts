import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KBANKPageRoutingModule } from './kbank-routing.module';

import { KBANKPage } from './kbank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KBANKPageRoutingModule
  ],
  declarations: [KBANKPage]
})
export class KBANKPageModule {}
