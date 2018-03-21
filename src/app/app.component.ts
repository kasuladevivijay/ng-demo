import { Component } from '@angular/core';
import { IsChangedValues } from './like/like.component';

// we can use the below approach or if we are creating a re-usable component
// its better to define the interface in the component and import it here
/*
interface IsChangedValues {
  newValue: boolean;
}
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post = {
    isLiked: true
  };

  courses = [];

  isChanged(isLiked: IsChangedValues) {
    console.log('is Changed!', isLiked);
  }
}
