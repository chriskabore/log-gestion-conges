import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'auth', 
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule), 
  },
  {
    path:'pages', 
    loadChildren: ()=> import('./features/layouts/layouts.module').then(m=>m.LayoutsModule),
  },
  {
    path:'**', 
    redirectTo: 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
