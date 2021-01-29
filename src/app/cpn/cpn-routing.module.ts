import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CPNPage } from './cpn.page';

const routes: Routes = [
  {
    path: '',
    component: CPNPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CPNPageRoutingModule {}
