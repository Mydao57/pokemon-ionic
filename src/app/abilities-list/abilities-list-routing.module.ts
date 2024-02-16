import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbilitiesListPage } from './abilities-list.page';

const routes: Routes = [
  {
    path: '',
    component: AbilitiesListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./abilities-new/abilities-new.module').then( m => m.AbilitiesNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./abilities/abilities.module').then( m => m.AbilitiesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbilitiesListPageRoutingModule {}
