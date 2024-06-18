import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService } from '../../../../services/demande.service';
import { Demande } from '../../../../models/demande.model';

@Component({
  selector: 'app-details-demandes',
  templateUrl: './details-demandes.component.html',
  styleUrl: './details-demandes.component.css'
})
export class DetailsDemandesComponent  implements OnInit{

  demande: Demande = new Demande;

  constructor( private activatedRoute: ActivatedRoute,
    private demandeService:DemandeService,
   private router:Router){

 }
  ngOnInit():void{
    this.demande.id = this.activatedRoute.snapshot.params['demandeId']
    if(!this.demande.id){
      this.router.navigate(["/pages/demandes"]);
    }
    this.findOne();
  }

  findOne():void{
    // fetch demande from API
    this.demandeService.findOne(this.demande.id as number).subscribe({
      next: (resp: Demande)=>{
        this.demande = resp;
      }, 
      error: (err:any) =>{
       console.log("Failed to fecth demande", err);
      }, 
    } 
    );
  }

  goBack():void{
    this.router.navigate(['/pages/demandes']);
  }

  deleteDemande(){
    
  }
  


}
