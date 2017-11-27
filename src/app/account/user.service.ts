import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { users } from '../mock/users';

@Injectable()
export class UserService {

  constructor() { }

  isUsernameTaken(username: string): Observable<{[key: string]: any} | null>  {
    const isTaken = users.filter( u => u.userName === username).length > 0;
    return new Observable( observer =>
      observer.next( isTaken ? {'usernameNotTaken': true} : null)
    );
  }

}
