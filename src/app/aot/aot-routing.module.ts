import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AOTPage } from './aot.page';

const routes: Routes = [
  {
    path: '',
    component: AOTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AOTPageRoutingModule {}
