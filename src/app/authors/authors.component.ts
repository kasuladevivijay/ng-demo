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

}
