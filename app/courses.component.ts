import {Component} from 'angular2/core';
import {CourseService} from './course.service';

@Component({
  selector: 'courses',
  template: `
    <h2>courses</h2>
    {{ title }}
    <ul>
      <li *ngFor="#course of courses"> {{ course }} </li>
    </ul>`,
  providers: [CourseService]
})
export class CoursesComponent {
  title = "the title of our courses page";
  courses;


  constructor(courseService: CourseService){
    this.courses = courseService.getCourses();

  }
}
