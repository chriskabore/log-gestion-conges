import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../../../../services/demande.service';
import { Demande } from '../../../../models/demande.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrl: './list-demandes.component.css'
})
export class ListDemandesComponent implements OnInit {

  demandes?: Demande[];
  
  constructor(
    private demandeService: DemandeService, 
    private router: Router,
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

  showDemande(id:number|undefined ):void{
    if(id !== undefined){
      this.router.navigate(["/pages/demandes/preview", id]);
    }
    
  }
}
