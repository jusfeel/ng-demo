import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { users } from '../../mock/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  addNewUserFormIsShown: boolean = false;
  addNewUserReactiveFormIsShown: boolean = false;
  editUserName: string = "";

  constructor() { }

  ngOnInit() {
    console.log(users);
    this.users = users;
  }

}
