import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup
  constructor(
    private fb: FormBuilder,
  ){

  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username:[null, [Validators.required]],
      password: [null, [Validators.required]],}
    );
  }

  onGetLoginInfos():void{
    console.log(this.formLogin.value);
  }
}
