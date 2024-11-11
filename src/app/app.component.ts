import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StudenList1Component } from './components/studen-list1/studen-list1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,StudenList1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Racheli-Shachar';
  ShowBless(){
    let date=new Date();
    let hour=date.getHours()
     if(hour>6&&hour<13)
    return "Good Morning"
    if(hour<18)
   return "Good Afternoon"
  return "Good night"
  }
}
