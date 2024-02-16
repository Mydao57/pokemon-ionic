import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeListPage } from './type-list.page';

const routes: Routes = [
  {
    path: '',
    component: TypeListPage,
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./type-new/type-new.module').then((m) => m.TypeNewPageModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./type/type.module').then((m) => m.TypePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeListPageRoutingModule {}
