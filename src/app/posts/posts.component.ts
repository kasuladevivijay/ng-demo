import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts = [];
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
    // made http private for other methods to access it
    // get method
    http.get(this.url)
        .subscribe((response) => {
          this.posts = response.json();
        });
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    // clear the field after data entered
    input.value = '';
    // post method
    this.http.post(this.url, JSON.stringify(post))
        .subscribe(response => {
          post['id'] = response.json().id;
          // push the added post to the Posts array
          // push will add it to end of the array where as
          // splice will add to the index mentioned in the first param
          this.posts.splice(0, 0, post);
        });
  }

}
