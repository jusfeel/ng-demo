import { AbstractControl, Validator, NG_ASYNC_VALIDATORS, AsyncValidatorFn } from '@angular/forms';
import { Directive } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Directive({
  selector: '[usernameNotTaken]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UsernameNotTakenDirective, multi: true}]
})
export class UsernameNotTakenDirective implements Validator {

  constructor(private userService: UserService) {}

  validate(control: AbstractControl) : Observable<{[key: string]: any} | null> {
    return this.userService.isUsernameTaken(control.value).debounceTime(500).distinctUntilChanged().first();
  }

  static createValidator(userService: UserService) {
    return (control: AbstractControl) => {
      return userService.isUsernameTaken(control.value).debounceTime(500).distinctUntilChanged().first();
    };
  }

}
