import { Injectable } from '@angular/core';
import { Class } from '../../models/Class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  // constructor() { }
  private classArray=[
    new Class(1,"4A","Lea Cohen",30),
    new Class(2,"4B","Racheli Shachar",25),
    new Class(3,"2A","GIla Lev",20),
    new Class(4,"1A","Esti Brand",28),
    new Class(5,"3A","Libi Cohen",32),
  ]

  getClasses(){
    return this.classArray
  }
  addClass(c:Class){
    this.classArray.push(c)
    console.log("in add class")
  }
  updateClass(c:Class){
    const classIndex=this.classArray.findIndex(x=>x.ID==c.ID)
    if(classIndex!==-1)
    {
      this.classArray[classIndex].gradeAndNumber=c.gradeAndNumber
this.classArray[classIndex].students=c.students
this.classArray[classIndex].teachersName=c.teachersName
    }
  }
  deleteClass(c:Class){
    this.classArray=this.classArray.filter(x=>x.ID!==c.ID)
    }
}
