import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonNewPage } from './pokemon-new.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonNewPageRoutingModule {}
