import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PTTEPPage } from './pttep.page';

const routes: Routes = [
  {
    path: '',
    component: PTTEPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PTTEPPageRoutingModule {}
