import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BTSPage } from './bts.page';

const routes: Routes = [
  {
    path: '',
    component: BTSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BTSPageRoutingModule {}
