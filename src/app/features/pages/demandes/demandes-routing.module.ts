import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDemandesComponent } from './list-demandes/list-demandes.component';
import { DetailsDemandesComponent } from './details-demandes/details-demandes.component';
import { EditDemandesComponent } from './edit-demandes/edit-demandes.component';

const routes: Routes = [
  {
    path:'',
    component: ListDemandesComponent,
  },
  {
    path:'preview/:demandeId',
    component:DetailsDemandesComponent,
  },
  /*{
    path:'edit/:demandeId',
    component:EditDemandesComponent,
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandesRoutingModule { }
