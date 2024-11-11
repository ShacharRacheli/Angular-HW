import { Component } from '@angular/core';
import { Student } from '../../models/Student';
import { CurrentStudentDetails1Component } from "../current-student-details1/current-student-details1.component";

@Component({
  selector: 'app-studen-list1',
  standalone: true,
  imports: [CurrentStudentDetails1Component],
  templateUrl: './studen-list1.component.html',
  styleUrl: './studen-list1.component.css'
})
export class StudenList1Component {
  listOfStudent: Student[]=[
    new Student(1,"LeaLevi","yavne",50,"0583237777",true,new Date()),
    new Student(2,"SaraLevi","yavne",60,"0583237777",true,new Date()),
    new Student(3,"LeaLevi","yavne",90,"0583237777",true,new Date()),
    new Student(4,"LibiLevi","yavne",68,"0583237777",true,new Date()),
  ]
  
  
  selected:number=0;
  show(id:number){
  this.selected=id;
  }
  add(){
    this.selected=-1;
  }
  parentSave(stud:Student)
  {
    this.listOfStudent.push(stud);
  }
  
}
