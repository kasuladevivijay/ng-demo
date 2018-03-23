import { BadRequestError } from './../common/bad-request-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [];
  err;
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
      }, error => {
        this.err = 'An Unexpected error occured while retrieving data';
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
        }, (error: AppError) => {
          if (error instanceof BadRequestError) {
            // this.form.setErrors(error.originalError);
          }
          this.err = 'Unexpected error occured while posting data';
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
        }, error => {
          this.err = 'Unexpected error occured while updating data';
        });
  }

  // Delete Method
  deletePost(post) {
    this.service.deletePost(345)
        .subscribe(response => {
          // find the index of the selected post
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }, (error: AppError) => {
          if (error instanceof NotFoundError) {
            this.err = 'This post has already been deleted';
          } else {
            this.err = 'Unexpected error occured while deleting data';
          }
        });
  }

}
