import { Component, OnInit } from '@angular/core';
import { Demande } from '../../../../models/demande.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DemandeService } from '../../../../services/demande.service';
import { Agent } from '../../../../models/agent.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentService } from '../../../../services/agent.service';

@Component({
  selector: 'app-edit-demandes',
  templateUrl: './edit-demandes.component.html',
  styleUrl: './edit-demandes.component.css'
})
export class EditDemandesComponent implements OnInit{
  
  demande!: Demande;
  agents: Agent[]=[];
  formGroup!: FormGroup;

  constructor(
    private activeModal: NgbActiveModal, 
    private demandeService: DemandeService,
    private fb: FormBuilder,
    private agentService: AgentService,

  ){

  }
  ngOnInit(): void {
    this.demande = this.demande?.id ? this.demande : new Demande();
    this.createFormGroup();
    this.getAgents();

  }

  private createFormGroup(){
    this.formGroup = this.fb.group({
      
      agentId: [this.demande?.agent?.id, Validators.required],
      motif: [this.demande?.motif, Validators.required],
      dateDebut: [this.demande?.dateDebut, Validators.required],
      dateFin: [this.demande?.dateFin, Validators.required],
    });

  }

  private getAgents():void{
    this.agentService.getAgents().subscribe({
      next: (resp: Agent[]) =>{
          this.agents = resp; 
      }, 
      error: (err: any) =>{
          console.log("Failed to  get Agents!");
      }, 
    });
  }

  saveDemande():void{
    const agentId = this.formGroup.value.agentId as number;
    this.demande.agent = this.agents.find((x: Agent)=>x.id =agentId);
    this.demande.motif = this.formGroup.value.motif;
    this.demande.dateDebut = this.formGroup.value.dateDebut;
    this.demande.dateFin = this.formGroup.value.dateFin;
    const editService = this.demande.id ? this.demandeService.update(this.demande) :
    this.demandeService.create(this.demande);

    editService.subscribe({
        next: (resp: Demande)=>{
          this.activeModal.close(true);
        }, 
        error: (err: any) =>{
            console.error("Failed to save demande ", err);
        },
    });
  }

  dismiss():void{
    this.activeModal.dismiss;
  }
}
