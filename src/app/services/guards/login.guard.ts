import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../loginwithGuard/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
const logInService=inject(LoginService);
const router =inject(Router)
 
if(logInService.isSignIn==false)
{
  router.navigate(['/Login'])
  return false;
}
  return logInService.isSignIn;
};
