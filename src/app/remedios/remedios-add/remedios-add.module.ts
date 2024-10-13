import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemediosAddPageRoutingModule } from './remedios-add-routing.module';

import { RemediosAddPage } from './remedios-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemediosAddPageRoutingModule
  ],
  declarations: [RemediosAddPage]
})
export class RemediosAddPageModule {}
