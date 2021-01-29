import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab/tab.module').then(m => m.TabPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'select',
    loadChildren: () => import('./select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'advanc',
    loadChildren: () => import('./advanc/advanc.module').then( m => m.ADVANCPageModule)
  },
  {
    path: 'aot',
    loadChildren: () => import('./aot/aot.module').then( m => m.AOTPageModule)
  },
  {
    path: 'bem',
    loadChildren: () => import('./bem/bem.module').then( m => m.BEMPageModule)
  },
  {
    path: 'bts',
    loadChildren: () => import('./bts/bts.module').then( m => m.BTSPageModule)
  },
  {
    path: 'cpn',
    loadChildren: () => import('./cpn/cpn.module').then( m => m.CPNPageModule)
  },
  {
    path: 'kbank',
    loadChildren: () => import('./kbank/kbank.module').then( m => m.KBANKPageModule)
  },
  {
    path: 'ptt',
    loadChildren: () => import('./ptt/ptt.module').then( m => m.PTTPageModule)
  },
  {
    path: 'pttep',
    loadChildren: () => import('./pttep/pttep.module').then( m => m.PTTEPPageModule)
  },
  {
    path: 'scb',
    loadChildren: () => import('./scb/scb.module').then( m => m.SCBPageModule)
  },
  {
    path: 'scc',
    loadChildren: () => import('./scc/scc.module').then( m => m.SCCPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'graph',
    loadChildren: () => import('./graph/graph.module').then( m => m.GraphPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
