
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children: [
      {
        path: 'select',
        children: [
          {
            path: '',
            loadChildren: () => import('../select/select.module').then(m => m.SelectPageModule)
          }
        ]
      },
      {
        path: 'graph',
        children: [
          {
            path: '',
            loadChildren: () => import('../graph/graph.module').then(m => m.GraphPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'app/tab/profile',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
