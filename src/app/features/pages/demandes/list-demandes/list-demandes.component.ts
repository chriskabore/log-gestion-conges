import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../../../../services/demande.service';
import { Demande } from '../../../../models/demande.model';

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrl: './list-demandes.component.css'
})
export class ListDemandesComponent implements OnInit {

  demandes?: Demande[];
  
  constructor(
    private demandeService: DemandeService
  ){

  }

  ngOnInit(){
    this.getDemandes();
  }

  //charge la liste des données
  getDemandes(){
   this.demandeService.getDemandes().subscribe({
  next: data =>{
    this.demandes = data;
    console.log(data);
  }, 
  error: err =>{
    console.log(err);
  }
});

  }
}
