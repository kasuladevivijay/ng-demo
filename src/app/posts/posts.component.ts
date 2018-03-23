import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [];
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
    // made http private for other methods to access it
  }

  // Initialization should be done in ngOnInit method as
  // calling a get request method in constrctor would be costly
  ngOnInit() {
    // get method
    this.http.get(this.url)
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

  // Update method
  updatePost(post) {
    // using patch: if we want to update some properties in the object(improves performance)
    // using put: if we want to update the entire object
    // this.http.put(this.url, JSON.stringify(post))
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
        .subscribe(response => {
          console.log(response.json());
        });
  }

  // Delete Method
  deletePost(post) {
    this.http.delete(this.url + '/' + post.id)
        .subscribe(response => {
          // find the index of the selected post
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        });
  }

}
