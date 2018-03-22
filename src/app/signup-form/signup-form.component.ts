import { UsernameValidators } from './../common/validators/username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    // multiple validators
    username: new FormControl('', [
      Validators.required, Validators.minLength(3), UsernameValidators.cannotContainSpace
    ]),
    password: new FormControl('', [
      Validators.required, Validators.minLength(5)
    ])
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
}
