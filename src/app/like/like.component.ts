import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
  encapsulation: ViewEncapsulation.None
  // ViewEncapsulation: Enum with values (Emulated, Native or None)
  // Emulated = angular style of applying shadowDOM or scoped styles
  // Native = uses browser's Native support of shadowDOM
  // None = no shadowDOM or scoped styles - styles will leak outside the component
})
export class LikeComponent implements OnInit {
  // Input Properties and aliasing
  // tslint:disable-next-line:no-input-rename
  @Input('is-liked') isLiked: boolean;

  // Output properties
  // Initialize with an instace of EventEmitter
  // Aliasing Output properties when we change any output property names
  // tslint:disable-next-line:no-output-rename
  @Output('change') click = new EventEmitter();

  imageURL = 'http://lorempixel.com/400/200/sports';
  constructor() { }

  ngOnInit() {
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    // emit the custom event
    // can pass event data and that will be received by all event subscribers like (app.component)
    // this.change.emit(this.isLiked);
    // We can pass objects too
    this.click.emit({ newValue: this.isLiked});
  }

}

// Create a interface to pass event data and then export
export interface IsChangedValues {
  newValue: boolean;
}
