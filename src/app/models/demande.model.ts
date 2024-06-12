import { Agent } from "./agent.model";

export class Demande{
    
         id?: number;
         dateDebut?: string;
         dateFin?: string;
         etat?: string;
         agent?: Agent;
         motif?: string;
    
}