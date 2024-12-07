import { Component, Input } from '@angular/core';
import { TeacherService } from '../../services/TeacherService/teacher.service';
import { Teacher } from '../../models/Teacher';
import { FormsModule } from '@angular/forms';
import { IconPipe } from "../../pipes/icon.pipe";

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [FormsModule, IconPipe],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent {
  teachersList:Teacher[]=[]
  constructor(private teacherService:TeacherService){
    this.teachersList=this.teacherService.getTeachers()
  }
  public teacher=new Teacher(this.teachersList.length+1,'',[]);
onSubmit(){
  const checkExist=this.teachersList.findIndex(x=>x.ID==this.teacher.ID)
  if(checkExist!==-1)
  {
    this.teacherService.updateTeacher(this.teacher)
  }
  else{
    this.teacherService.addTeacher(this.teacher)
  }
  this.resetForm(); // Call resetForm to clear the form
}


private resetForm() {
  this.teacher = new Teacher(this.teachersList.length+1, '', []);
}
public icon:string=''


}
