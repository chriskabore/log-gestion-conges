import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';
import { JwtToken } from '../models/jwt-token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string = 'http://localhost:8080';
  httpClient = inject(HttpClient);
  constructor() {

   }

   authenticate(login: Login): Observable<JwtToken>{
      return this.httpClient.post(this.API_URL+'/api/authenticate', login);
   }


}
