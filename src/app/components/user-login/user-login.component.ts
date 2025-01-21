import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/UserService/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit{
message?:string;
router =inject(Router)

 id:number=0;
  constructor(private userService:UserService){}
onSubmit(){
const user=this.userService.getUserById(this.id)
  if(user!==null)
  {
  this.router.navigate(['/allUsers'])
  }
  else{
    this.message="Error : User not found";
  }
}
  ngOnInit(): void {
  }

}
