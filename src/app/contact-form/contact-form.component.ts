import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}
  ];
  log(x) {
    // ngModel Object will be rendered
    console.log(x);
  }

  submit(f) {
    console.log(JSON.stringify(f.value));
  }
}
