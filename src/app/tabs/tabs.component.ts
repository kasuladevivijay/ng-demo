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
}
