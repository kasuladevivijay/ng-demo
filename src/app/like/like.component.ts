import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  // Input Properties and aliasing
  // tslint:disable-next-line:no-input-rename
  @Input('is-liked') isLiked: boolean;

  // Output properties
  // Initialize with an instace of EventEmitter
  @Output() change = new EventEmitter();

  imageURL = 'http://lorempixel.com/400/200/sports';
  constructor() { }

  ngOnInit() {
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    // emit the custom event
    this.change.emit();
  }

}
