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
      this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    // Optimistic updates
    this.posts.splice(0, 0, post);

    // clear the field after data entered
    input.value = '';
    // post method from the service
    this.service.create(post)
        .subscribe(newPost => {
          post['id'] = newPost.id;
          // push the added post to the Posts array
          // push will add it to end of the array where as
          // splice will add to the index mentioned in the first param
          // this.posts.splice(0, 0, post);
        }, (error: AppError) => {
          // rollback in case of any error
          this.posts.splice(0, 1);

          if (error instanceof BadRequestError) {
            // this.form.setErrors(error.originalError);
          } else {
            throw error;
          }
        });
  }

  // Update method
  updatePost(post) {
    // using patch: if we want to update some properties in the object(improves performance)
    // using put: if we want to update the entire object
    // this.http.put(this.url, JSON.stringify(post))
    // from service
    this.service.update(post)
        .subscribe(updatedPost => console.log(updatedPost)
        );
  }

  // Delete Method
  deletePost(post) {
    // find the index of the selected post
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
        .subscribe(
          // null because it doesn't return any response
          null,
           (error: AppError) => {
            //  rollback
            this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError) {
            this.err = 'This post has already been deleted';
          } else {
            throw error;
          }
        });
  }

}
