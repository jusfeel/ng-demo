import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LettersNumbersOnlyDirective } from '../../shared/validators/letters-numbers-only.directive';
import { UsernameNotTakenDirective  } from '../username-not-taken.directive';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form-reactive',
  templateUrl: './user-form-reactive.component.html',
  styleUrls: ['./user-form-reactive.component.css']
})
export class UserFormReactiveComponent implements OnInit {

  userForm: FormGroup;
  @Output() cancel: EventEmitter<null> = new EventEmitter;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userForm =  new FormGroup({
       userName: new FormControl('',
         [
           Validators.required,
           new LettersNumbersOnlyDirective().validate,
           Validators.minLength(2),
           Validators.maxLength(24)
         ],
         UsernameNotTakenDirective.createValidator(this.userService)
       ),
       firstName: new FormControl('', [
         Validators.required]),
       lastName: new FormControl('', [
         Validators.required]),
       address: new FormGroup({
         street: new FormControl(''),
         city: new FormControl(''),
         zipCode: new FormControl('')
       })
    });
  }

  onSubmit() {

  }

}
