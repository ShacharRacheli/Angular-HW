import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-current-student-details1',
  standalone: true,
  imports: [],
  templateUrl: './current-student-details1.component.html',
  styleUrl: './current-student-details1.component.css'
})
export class CurrentStudentDetails1Component {
  @Input() id: number = 0;
  @Input() list1: Student[] = [];
student:Student | undefined;  

@Output() saveStudent:EventEmitter<any>=new EventEmitter<any>();
showDetails() {
    let index = this.list1.findIndex(st => st.ID == this.id)
    return this.list1[index];
  }
  childSave(id:number,name:string,adrress:string,average:number)
{
this.student=new Student(id,name,adrress,average)
this.saveStudent.emit(this.student);
}

}
