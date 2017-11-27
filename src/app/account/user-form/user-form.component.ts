import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user: User = new User;
  @Output() cancel: EventEmitter<null> = new EventEmitter;

  editMode: boolean = false;

  constructor() { }

  ngOnInit() {
    this.editMode = this.user.userName != null;
  }

  onSubmit() {
    console.log("submitted", this.user);
  }

}
