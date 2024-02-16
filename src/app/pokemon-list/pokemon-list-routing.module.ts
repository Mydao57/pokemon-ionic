import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonListPage } from './pokemon-list.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./pokemon-new/pokemon-new.module').then( m => m.PokemonNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./pokemon/pokemon.module').then( m => m.PokemonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonListPageRoutingModule {}
