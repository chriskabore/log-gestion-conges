import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandesRoutingModule } from './demandes-routing.module';
import { ListDemandesComponent } from './list-demandes/list-demandes.component';
import { DetailsDemandesComponent } from './details-demandes/details-demandes.component';


@NgModule({
  declarations: [
    ListDemandesComponent,
    DetailsDemandesComponent
  ],
  imports: [
    CommonModule,
    DemandesRoutingModule
  ]
})
export class DemandesModule { }
