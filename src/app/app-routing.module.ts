import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'prueba1',
    loadChildren: () => import('./Components/prueba1/prueba1.module').then(m => m.Prueba1Module)
  },
  {
    path: 'prueba2',
    loadChildren: () => import('./Components/prueba2/prueba2.module').then(m => m.Prueba2Module)
  },
  {
    path: '',
    loadChildren: () => import('./Components/prueba2/prueba2.module').then(m => m.Prueba2Module),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
