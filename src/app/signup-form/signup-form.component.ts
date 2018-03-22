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
    // Nested FormGroups
    account: new FormGroup({
        // multiple validators
        // Added asynchronous validators as third parameter
      username: new FormControl('', [
       Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ], UsernameValidators.shouldBeUnique),
      password: new FormControl('', [
       Validators.required, Validators.minLength(5)
      ])
    })
  });

  login() {
    /*
    when connected to DB
    const isValid: boolean = authService.login(this.form.value);
    if (!isValid) {
      this.form.setErrors({
        inValidLogin: true
      });
    } */
    this.form.setErrors({
      inValidLogin: true
    });
  }

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }
}
