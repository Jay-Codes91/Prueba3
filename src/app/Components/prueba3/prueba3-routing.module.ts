import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Prueba3Component } from './prueba3.component';
const routes: Routes = [
  {path: '', component: Prueba3Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Prueba3RoutingModule { }
