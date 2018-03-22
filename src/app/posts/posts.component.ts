import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts = [];
  constructor(http: Http) {
    // get method
    http.get('http://jsonplaceholder.typicode.com/posts')
        .subscribe((response) => {
          this.posts = response.json();
        });
  }
}
