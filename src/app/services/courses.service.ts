import { Injectable } from '@angular/core';
import { Courses, NameCourses } from '../models/Courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // constructor() { }
  private course=[
    new Courses(1, 'HTML Basics', NameCourses.html),
    new Courses(2, 'Advanced Math', NameCourses.math),
    new Courses(3, 'C Programming', NameCourses.c),
    new Courses(4, 'SQL for Beginners', NameCourses.sql)
 ]
 getCourses():Courses[]{
  return this.course
 }
}
