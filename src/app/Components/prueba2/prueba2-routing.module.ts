import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Prueba2Component } from './prueba2.component';
const routes: Routes = [
  {path: '', component: Prueba2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Prueba2RoutingModule { }
