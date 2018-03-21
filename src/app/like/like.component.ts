import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  // Input Properties and aliasing
  // tslint:disable-next-line:no-input-rename
  @Input('is-liked') isLiked: boolean;

  imageURL = 'http://lorempixel.com/400/200/sports';
  constructor() { }

  ngOnInit() {
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
  }

}
