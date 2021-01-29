import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KBANKPage } from './kbank.page';

const routes: Routes = [
  {
    path: '',
    component: KBANKPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KBANKPageRoutingModule {}
