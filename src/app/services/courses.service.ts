import { Injectable } from '@angular/core';
import { Courses, NameCourses } from '../models/Courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // constructor() { }
  private course=[
    new Courses(1, 'HTML Basics', NameCourses.html,true),
    new Courses(2, 'Advanced Math', NameCourses.math,false),
    new Courses(3, 'C Programming', NameCourses.c,true),
    new Courses(4, 'SQL for Beginners', NameCourses.sql,false)
 ]
 getCourses():Courses[]{
  return this.course
 }
}
