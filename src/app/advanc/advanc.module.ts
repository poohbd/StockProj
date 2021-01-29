import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ADVANCPageRoutingModule } from './advanc-routing.module';

import { ADVANCPage } from './advanc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ADVANCPageRoutingModule
  ],
  declarations: [ADVANCPage]
})
export class ADVANCPageModule {}
