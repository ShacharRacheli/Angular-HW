import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Courses, NameCourses } from '../models/Courses';

@Directive({
  selector: '[appCourse]',
  standalone: true
})
export class CourseDirective implements OnInit{

  constructor(private el: ElementRef) { }
  @Input() course1!:NameCourses ;
  ngOnInit() {
    this.colorCourse(); 
  }
  private colorCourse() {
    const color = this.getColor(this.course1);
    this.el.nativeElement.style.color = color; // Set the color of the element
  }
  private getColor(course: NameCourses): string {
    switch (course) {
      case 'sql':
        return 'green';
      case 'c':
        return 'pink';
      case 'math':
        return 'purple';
      default:
        return 'lightblue';
  }
}
}
