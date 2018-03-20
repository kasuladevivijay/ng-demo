import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {
  title = 'List of Courses';
  courses;
  course = {
    title: 'Angular-Complete',
    rating: 4.9274,
    students: 92400,
    price: 789.90,
    releaseDate: new Date(2018, 4, 20)
  };

  // Logic for calling a HTTP Service for data
  // difficult to write unit test
  // The above approach is not encouraged because it will lead to tight coupling.
  // If we need to use the sevice in anyother component we need to call the service again

  constructor(service: CoursesService) {
    // const service = new CoursesService; Tightly couples, so need to use the service instance
    //  as a parameter to this constructor - Dependency Injection
    this.courses = service.getCourses();
  }
}
