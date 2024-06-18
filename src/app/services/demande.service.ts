import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { API_URL } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Demande } from '../models/demande.model';


@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  httpClient = inject(HttpClient);
  
  constructor(

  ) { }

  getDemandes(): Observable<Demande[]>{
    return this.httpClient.get<Demande[]>(API_URL+'/api/demandes');
   
  }

  //fetches one demande from DB
  findOne(demandeId: number ):Observable<Demande>{
    return this.httpClient.get<Demande>(`${API_URL}/api/demandes/${demandeId}`);
  }

  // deletes a demande
  deleteOne(demandeId: number ):Observable<any>{
    return this.httpClient.delete<any>(`${API_URL}/api/demandes/${demandeId}`);
  }

  //update

  update(demande: Demande):Observable<Demande>{
    return this.httpClient.put<Demande>(`${API_URL}/api/demandes/${demande.id}`, demande.id);
  }

  // create
  create(demande: Demande):Observable<Demande>{
    return this.httpClient.post<Demande>(`${API_URL}/api/demandes`, demande);
  }
}
