import { Agent } from "./agent.model";

export class Demande{
    constructor(
        private id?: number, 
        private dateDebut?: string,
        private dateFin?: string,
        private etat?: string,
        private agent?: Agent,
    ){

    }
}