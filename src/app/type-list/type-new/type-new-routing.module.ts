import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeNewPage } from './type-new.page';

const routes: Routes = [
  {
    path: '',
    component: TypeNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeNewPageRoutingModule {}
