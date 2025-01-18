import { Routes } from '@angular/router';
import { TeacherFormComponent } from './components/teacher-form/teacher-form.component';
import { CoursesHWComponent } from './components/courses-hw/courses-hw.component';
import { CurrentStudentDetails1Component } from './components/current-student-details1/current-student-details1.component';
import { InformationPopupComponent } from './components/information-popup/information-popup.component';
import { StudenList1Component } from './components/studen-list1/studen-list1.component';
import { AppComponent } from './app.component';
import { TeacherReactiveFormComponent } from './components/teacher-reactive-form/teacher-reactive-form.component';
import { TreeCoursesComponent } from './components/tree-courses/tree-courses.component';
import { ApiEventComponent } from './components/api-event/api-event.component';
import { loginGuard } from './services/guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { AfterLoginComponent } from './components/after-login/after-login.component';
export const routes: Routes = [
    {path:'teacherForm',component:TeacherFormComponent},
    {path:'courses',component:CoursesHWComponent},
    // {path:'currentStudent',component:CurrentStudentDetails1Component},
    // {path:'information',component:InformationPopupComponent},
    {path:'studentList',component:StudenList1Component},
    {path:'techearReactiveForm',component:TeacherReactiveFormComponent},
    {path:'TreeCoursesComponent',component:TreeCoursesComponent},
    {path:'ApiEventComponent',component:ApiEventComponent},
    {path:'Login',
        loadComponent:() =>
        import('./components/login/login.component').then(m=>m.LoginComponent)
    },
    {path:'AfterLogin',
        loadComponent:() =>
        import('./components/after-login/after-login.component').then((m)=>m.AfterLoginComponent),
        canActivate: [loginGuard],

    },
];

