import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService, 
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    //const token = localStorage.getItem('JWT_TOKEN');
    console.log(token);
    if(token !== null && !request.url.includes("/authenticate")){
      const authReq = request.clone({
        headers: request.headers.set("Authorization", "Bearer  "+ token),
      });
        return next.handle(authReq);
    } else {
      return next.handle(request);
    }
    
  }
}


