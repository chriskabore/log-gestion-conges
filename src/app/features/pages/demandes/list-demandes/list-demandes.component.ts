import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../../../../services/demande.service';

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrl: './list-demandes.component.css'
})
export class ListDemandesComponent implements OnInit {

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
  next: value =>{
    console.log(value);
  }, 
  error: err =>{
    console.log(err);
  }
});

  }
}
