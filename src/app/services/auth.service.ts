import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';
import { JwtToken } from '../models/jwt-token.model';
import { API_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  httpClient = inject(HttpClient);
  constructor() {

   }

   authenticate(login: Login): Observable<JwtToken>{
      return this.httpClient.post(API_URL+'/api/authenticate', login);
   }


}
