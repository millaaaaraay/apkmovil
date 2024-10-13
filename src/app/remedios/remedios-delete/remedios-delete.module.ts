import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemediosDeletePageRoutingModule } from './remedios-delete-routing.module';

import { RemediosDeletePage } from './remedios-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemediosDeletePageRoutingModule
  ],
  declarations: [RemediosDeletePage]
})
export class RemediosDeletePageModule {}
