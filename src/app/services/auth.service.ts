import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';
import { JwtToken } from '../models/jwt-token.model';
import { API_URL } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  httpClient = inject(HttpClient);
  TOKEN_KEY: string = 'JWT_TOKEN';

  constructor(
    private router: Router,
  ) {

   }

   authenticate(login: Login): Observable<JwtToken>{
      return this.httpClient.post(API_URL+'/api/authenticate', login);
   }

   saveToken(token: string):void{
    localStorage.setItem(this.TOKEN_KEY, token);
   }

   getToken():string | null{
    return localStorage.getItem(this.TOKEN_KEY);
   }

   logout():void{
    localStorage.clear();
    // redirect to 
    this.router.navigate(['/auth']);
   }


}
