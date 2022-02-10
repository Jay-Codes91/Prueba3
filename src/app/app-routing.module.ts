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
    path: 'side-nav',
    loadChildren: () => import('./Components/side-nav/side-nav.module').then(m => m.SideNavModule)
  },

  {
    path: '',
    loadChildren: () => import('./Components/side-nav/side-nav.module').then(m => m.SideNavModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
