import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemediosDeletePage } from './remedios-delete.page';

const routes: Routes = [
  {
    path: '',
    component: RemediosDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemediosDeletePageRoutingModule {}
