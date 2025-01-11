import { Injectable } from '@angular/core';
import { Courses, NameCourses } from '../models/Courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // constructor() { }
  private course=[
    new Courses(1, 'HTML Basics', NameCourses.html,2),
    new Courses(2, 'Advanced Math', NameCourses.math,1),
    new Courses(3, 'C Programming', NameCourses.c,3),
    new Courses(4, 'SQL for Beginners', NameCourses.sql,3)
 ]
 getCourses():Courses[]{
  return this.course
 }
}
