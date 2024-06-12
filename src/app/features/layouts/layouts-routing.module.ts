import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './content-layout/content-layout.component';

const routes: Routes = [
  {
    path:'', 
    component: ContentLayoutComponent,
  }, 
  {
    path: 'demandes',
    loadChildren: ()=>import('../pages/demandes/demandes.module').then(m=>m.DemandesModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
