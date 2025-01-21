import { Injectable } from '@angular/core';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
private users=[
    new User(1,"lea","023569850"),
    new User(2,"Yael","05369823"),
    new User(3,"Gili","032658955"),
    new User(4,"Debi","02546985"),
  ]

  getUserById(id:number):User|null{
   const user= this.users.find(u=>u.Id===id)
return user?user:null;
  }
  getUsers(){
    return this.users
  }
}
