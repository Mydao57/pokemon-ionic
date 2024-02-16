import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeListPageRoutingModule } from './type-list-routing.module';

import { TypeListPage } from './type-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeListPageRoutingModule
  ],
  declarations: [TypeListPage]
})
export class TypeListPageModule {}
