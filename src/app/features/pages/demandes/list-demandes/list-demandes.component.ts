import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../../../../services/demande.service';
import { Demande } from '../../../../models/demande.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditDemandesComponent } from '../edit-demandes/edit-demandes.component';

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
    private modal: NgbModal,
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

  deleteDemande(id:number | undefined):void{
    this.demandeService.deleteOne(id as number).subscribe({
      next: (resp: any)=>{
        console.log("Demande deleted!");
        this.getDemandes();
      }, 
      error: (err: any) =>{
          console.log("Failed to delete!");
      }, 
    });
  }

  async openEditDemande(demande?: Demande){
    //this.router.navigate(['edit', demande.id]);
    const currentModal = await this.modal.open(EditDemandesComponent, {size:'lg', backdrop:'static'});
    currentModal.componentInstance.demande = demande;
    currentModal.result.then((resp:any)=>{
      console.log("RESPONSE FROM MODAL:", resp);
      if(resp===true){
        this.getDemandes();
      }
    });
  }
}
