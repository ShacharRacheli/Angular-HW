import { Component } from '@angular/core';
import { UserService } from '../../services/UserService/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent  {
  constructor(private userService:UserService){}
allUsers=this.userService.getUsers();

}
