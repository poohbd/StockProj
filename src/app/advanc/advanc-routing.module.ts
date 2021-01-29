import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ADVANCPage } from './advanc.page';

const routes: Routes = [
  {
    path: '',
    component: ADVANCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ADVANCPageRoutingModule {}
