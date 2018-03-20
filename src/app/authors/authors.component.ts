import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authors;
  isActive = false;

  emails = 'me@example.com';
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }
  onClick($event) {
    // to Stop event propagation we use the below statement
    $event.stopPropagation();
    console.log('Button Clicked', $event);
  }
  onDivClick() {
    console.log('Div was clicked');
  }
  // event filtering
  onKeyUp(email) {
    /** natively we have a event object
     * if($event.keyCode === 13){
     * console.log('Enter was pressed');
     *  }
     */
    // But in angular we don't need the above logic, we can use . operator
    // console.log('Enter was pressed');
    console.log(email);

  }
  keyUp() {
    console.log(this.emails);
  }

}
