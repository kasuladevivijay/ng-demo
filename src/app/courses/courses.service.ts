import { Injectable } from '@angular/core';

// in Angular service is a plain typsescript class

@Injectable()
export class CoursesService {
  getCourses() {
    return ['Course1', 'Course2', 'Course3'];
  }
}
