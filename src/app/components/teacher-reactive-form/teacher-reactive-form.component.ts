import { Component, OnInit } from '@angular/core';
import { Class } from '../../models/Class';
import { ClassService } from '../../services/ClassService/class.service';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './teacher-reactive-form.component.html',
  styleUrl: './teacher-reactive-form.component.css'
})
export class TeacherReactiveFormComponent implements OnInit {  

 public classList:Class[]=[];
classForm!:FormGroup ;
  constructor(private  fb:FormBuilder,private classService:ClassService){
    // this.classList=this.classService.getClasses()
  }
  ngOnInit():void{
this.classForm=this.fb.group({
  ID:['',[Validators.required,Validators.min(1)]],
  gradeAndNumber:['',[Validators.required,Validators.minLength(2)]],
  teachersName:['',[Validators.required,Validators.minLength(3)]],
  students:['',[Validators.required,Validators.min(10),Validators.max(40)]],
})
this.classList=this.classService.getClasses()
  }
  get f():{[key:string]:AbstractControl}{
return this.classForm.controls
  }
  onSubmit(){
    const newClass: Class={
      ID:this.classForm.value.ID,
gradeAndNumber:this.classForm.value.gradeAndNumber,
teachersName:this.classForm.value.teachersName,
students:this.classForm.value.students,
    }
const checkExist=this.classList.findIndex(c=>c.ID==newClass.ID)
if(checkExist!==-1){
this.classService.updateClass(newClass)
}
else{
this.classService.addClass(newClass)
}
this.classForm.reset();   
}
  delete(){

  }
}
