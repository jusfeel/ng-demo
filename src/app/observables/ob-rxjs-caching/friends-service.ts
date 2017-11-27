import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class FriendsService{

  _friends: Observable<any> = null;

  constructor(private http: Http){
  }

  clearCache(){
    this._friends = null;
  }

  /**
    publishReplay(x).refCount() combined does the following:

    It create a ReplaySubject which replay up to x emissions.
    If x is not defined then it replays the complete stream.
    It makes this ReplaySubject multicast compatible using a refCount() operator.
    This results in concurrent subscriptions receiving the same emissions.

    In other words:

    publishReplay(1) tells rxjs to cache the most recent value
    which is perfect for single value http calls.
    refCount() is used to keep the observable alive for as long as
    there are subscribers.

  */

  getFriends(){
    if(!this._friends){
      this._friends = this.http.get('http://localhost:3002/friends')
                          .debounceTime(5000)
                          .map((res:Response) => res.json())
                          .do(friends => console.log('fetched friends'))
                          .publishReplay(1)
                          .refCount();
    }
    return this._friends;
  }

}
