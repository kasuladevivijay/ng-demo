import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  viewMode = 'map';
  students = [
    {id: 1, name: 'Bruce'},
    {id: 2, name: 'Clark'},
    {id: 3, name: 'Diana'},
  ];
  courses;

  // ngFor looks for change detection when the below functions or events are called
  // add student
  add() {
    this.students.push({id: 4, name: 'Flash'});
  }
  // remove a student
  remove(student) {
    const index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }
  // Load courses
  loadCourses() {
    this.courses = [
      {id: 1, name: 'Course1'},
      {id: 2, name: 'Course2'},
      {id: 3, name: 'Course3'}
    ];
  }
  // trackCourses implementation, takes two args - index and object
  trackCourses(index, course) {
    return course ? course.id : undefined;
  }
}
