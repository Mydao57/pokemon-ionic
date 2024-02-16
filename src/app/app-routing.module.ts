import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab/tab.module').then(m => m.TabPageModule)
  },  {
    path: 'pokemon-list',
    loadChildren: () => import('./pokemon-list/pokemon-list.module').then( m => m.PokemonListPageModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon-list/pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },
  {
    path: 'pokemon-new',
    loadChildren: () => import('./pokemon-list/pokemon-new/pokemon-new.module').then( m => m.PokemonNewPageModule)
  },
  {
    path: 'pokemon-list',
    loadChildren: () => import('./pokemon-list/pokemon-list.module').then( m => m.PokemonListPageModule)
  },
  {
    path: 'type-list',
    loadChildren: () => import('./type-list/type-list.module').then( m => m.TypeListPageModule)
  },
  {
    path: 'abilities-new',
    loadChildren: () => import('./abilities-list/abilities-new/abilities-new.module').then( m => m.AbilitiesNewPageModule)
  },
  {
    path: 'abilities',
    loadChildren: () => import('./abilities-list/abilities/abilities.module').then( m => m.AbilitiesPageModule)
  },
  {
    path: 'abilities-list',
    loadChildren: () => import('./abilities-list/abilities-list.module').then( m => m.AbilitiesListPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
