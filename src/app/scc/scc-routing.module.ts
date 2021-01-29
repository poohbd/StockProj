import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SCCPage } from './scc.page';

const routes: Routes = [
  {
    path: '',
    component: SCCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SCCPageRoutingModule {}
