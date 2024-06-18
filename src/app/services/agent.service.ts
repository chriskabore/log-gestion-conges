import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../models/agent.model';
import { API_URL } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  httpClient = inject(HttpClient);

  constructor() { }

  getAgents():Observable<Agent[]>{
    return this.httpClient.get<Agent[]>(API_URL+'/api/agents');
  }
}
