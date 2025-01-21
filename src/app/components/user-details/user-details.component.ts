import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/UserService/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/User';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
  constructor(private userService:UserService, private activatedRoute: ActivatedRoute){}
currentId:number=0;
currentUser:User | null | undefined;
msg?:string
  ngOnInit(): void {

let t=this.activatedRoute;
this.activatedRoute.paramMap.subscribe((params)=>{
const id=params.get('userId');
if(id){
  this.currentId=+id
  this.currentUser=this.userService.getUserById(this.currentId);
  if(!this.currentUser){
this.msg="Error 404:User not found ";
  }
}
else{
this.msg="Error 404 "
}
})

  }

}
