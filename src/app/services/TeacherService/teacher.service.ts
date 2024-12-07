import { Injectable } from '@angular/core';
import { Teacher } from '../../models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  // constructor() { }
  private teachersArray=[
new Teacher(1,"tamar levi",["a1","a2","b4"]),
new Teacher(2,"Lea Lev",["c1","b2","b4"]),
new Teacher(3,"Niri Cohen",["b1","a1"]),
new Teacher(4,"Ester Gad",["b4","a1","a4","a3"]),
new Teacher(5,"Libi Bruk",["b1","a3","b2","c2"]),
  ]

  getTeachers(){
    return this.teachersArray
  }
  addTeacher(t:Teacher){
this.teachersArray.push(t)
console.log("in add")
  }
  updateTeacher(t:Teacher){
  const teachersIndex= this.teachersArray.findIndex(x=>x.ID==t.ID)
  if(teachersIndex!==-1)
  {
this.teachersArray[teachersIndex].name=t.name
this.teachersArray[teachersIndex].classes=t.classes
  }
console.log("in update")

  }
  deleteTeacher(t:Teacher){
this.teachersArray=this.teachersArray.filter(x=>x.ID!==t.ID)
  }

}
