import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeNewPageRoutingModule } from './type-new-routing.module';

import { TypeNewPage } from './type-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeNewPageRoutingModule
  ],
  declarations: [TypeNewPage]
})
export class TypeNewPageModule {}
