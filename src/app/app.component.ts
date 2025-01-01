import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StudenList1Component } from './components/studen-list1/studen-list1.component';
import { CoursesHWComponent } from "./components/courses-hw/courses-hw.component";
import { TeacherFormComponent } from "./components/teacher-form/teacher-form.component";
import { IconPipe } from "./pipes/icon.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StudenList1Component, CoursesHWComponent, TeacherFormComponent, IconPipe,RouterLink, 
    RouterLinkActive],
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
