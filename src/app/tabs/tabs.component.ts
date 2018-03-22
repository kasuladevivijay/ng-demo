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
}
