import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [];
  constructor(private service: PostService) {
    // separation of concerns , calling the service instead of Http Class
  }

  // Initialization should be done in ngOnInit method as
  // calling a get request method in constrctor would be costly
  ngOnInit() {
    // get method from the service
      this.service.getPosts()
      .subscribe((response) => {
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    // clear the field after data entered
    input.value = '';
    // post method from the service
    this.service.createPost(post)
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
    // from service
    this.service.updatePost(post)
        .subscribe(response => {
          console.log(response.json());
        });
  }

  // Delete Method
  deletePost(post) {
    this.service.deletePost(post)
        .subscribe(response => {
          // find the index of the selected post
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        });
  }

}
