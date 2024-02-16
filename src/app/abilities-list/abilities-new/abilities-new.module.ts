import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbilitiesNewPageRoutingModule } from './abilities-new-routing.module';

import { AbilitiesNewPage } from './abilities-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbilitiesNewPageRoutingModule
  ],
  declarations: [AbilitiesNewPage]
})
export class AbilitiesNewPageModule {}
