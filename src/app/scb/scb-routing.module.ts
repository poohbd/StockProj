import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SCBPage } from './scb.page';

const routes: Routes = [
  {
    path: '',
    component: SCBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SCBPageRoutingModule {}
