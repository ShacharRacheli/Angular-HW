import { Component,NgModule } from '@angular/core';
import { Courses,NameCourses  } from '../../models/Courses';
import { CoursesService } from '../../services/courses.service';
import { CourseDirective } from '../../directives/course.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses-hw',
  standalone: true,
  imports: [CourseDirective,CommonModule],
  templateUrl: './courses-hw.component.html',
  styleUrl: './courses-hw.component.css'
})
export class CoursesHWComponent {
courses:Courses[] =[];
selectoption:Courses[]=[];
constructor(private coursesService:CoursesService)
{
this.courses=this.coursesService.getCourses();
}
selectedCourse(e:Event)
{
  const target =e.target as HTMLSelectElement;
  const selectedNameCourse = target.value;

    const selectedCourse = this.courses.find(course => course.NameCourse === selectedNameCourse);
   if(selectedCourse&& !this.selectoption.includes(selectedCourse))
{this.selectoption.push(selectedCourse);
}
}
}