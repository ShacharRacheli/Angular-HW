import { Component } from '@angular/core';
import { LoginService } from '../../services/loginwithGuard/login.service';

@Component({
  selector: 'app-after-login',
  standalone: true,
  imports: [],
  templateUrl: './after-login.component.html',
  styleUrl: './after-login.component.css'
})
export class AfterLoginComponent {

  // name=""
constructor(private loginService:LoginService){}
  signOut(){
this.loginService.onSignOut();
  }
}
