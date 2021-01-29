import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SCCPageRoutingModule } from './scc-routing.module';

import { SCCPage } from './scc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SCCPageRoutingModule
  ],
  declarations: [SCCPage]
})
export class SCCPageModule {}
