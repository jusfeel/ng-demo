import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-view-simple',
  templateUrl: './user-view-simple.component.html',
  styleUrls: ['./user-view-simple.component.css']
})
export class UserViewSimpleComponent implements OnInit {

  @Input() user: User;
  @Output() edit: EventEmitter<null> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
