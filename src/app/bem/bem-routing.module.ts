import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BEMPage } from './bem.page';

const routes: Routes = [
  {
    path: '',
    component: BEMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BEMPageRoutingModule {}
