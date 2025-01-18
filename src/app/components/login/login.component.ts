import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/loginwithGuard/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  logInForm=new FormGroup({
name:new FormControl<string>('',[Validators.minLength(3)])
  });


  constructor(private loginService:LoginService){}
  onSignin(){
    if(this.logInForm.valid)
    this.loginService.signIn(this.logInForm.value.name as string)
  }
}
