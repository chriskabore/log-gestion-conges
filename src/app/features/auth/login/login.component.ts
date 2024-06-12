import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../../models/login.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup
  login: Login = new Login();
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ){

  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username:[null, [Validators.required]],
      password: [null, [Validators.required]],}
    );
  }

  onGetLoginInfos():void{
    this.login = this.formLogin.value as Login;
    this.authService.authenticate(this.login).subscribe({
      next: value =>{
        console.log(value);
      },
      error: err =>{
        console.log(err);
      }
    });
    //console.log(this.formLogin.value);
    console.log(this.login);
  }
}
