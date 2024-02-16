import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonNewPageRoutingModule } from './pokemon-new-routing.module';

import { PokemonNewPage } from './pokemon-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonNewPageRoutingModule
  ],
  declarations: [PokemonNewPage]
})
export class PokemonNewPageModule {}
