import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isSignIn:boolean=false;
  constructor(private router:Router) { }

signIn(name:string){
this.isSignIn=true;
this.router.navigate(['/AfterLogin']);
}
onSignOut(){
  this.isSignIn=false;
  this.router.navigate(['/Login']);
}


}
