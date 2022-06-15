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
    path: 'oficinas',
    loadChildren: () => import('./Components/oficinas/oficinas.module').then(m => m.OficinasModule)
  },

  {
    path: 'prueba3',
    loadChildren: () => import('./Components/prueba3/prueba3.module').then(m => m.Prueba3Module)
  },

  {
    path: '',
    loadChildren: () => import('./Components/oficinas/oficinas.module').then(m => m.OficinasModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
