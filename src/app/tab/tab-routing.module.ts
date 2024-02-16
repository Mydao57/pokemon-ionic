import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, {
        path:'home',
        loadChildren: () => import('../home/home.module').then(m=>m.HomePageModule)
      }, 
      {
        path: 'type',
        loadChildren: () => import('../type-list/type-list.module').then(m=>m.TypeListPageModule)
      },
      {
        path: 'pokemon',
        loadChildren: () => import('../pokemon-list/pokemon-list.module').then(m=>m.PokemonListPageModule)
      }, 
      {
        path: 'abilities',
        loadChildren: () => import('../abilities-list/abilities-list.module').then(m=>m.AbilitiesListPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m=>m.AboutPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
