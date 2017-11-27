import { Component, OnInit, OnDestroy } from '@angular/core';
import { FriendsService } from './friends-service';

@Component({
  selector:'friends-list',
  template:`
    <div *ngFor="let friend of friends">
      {{friend.name}}
    </div>
    <p *ngIf="loading"><i class="fa fa-spin fa-spinner"></i> loading</p>
    <button (click)="loadData()">Reload</button>
  `
})

export class FriendsList implements OnInit {

  friends = [];
  subscription;
  loading = false;

  constructor(private _friendsServce:FriendsService){
  }

  loadData(){
    this.loading = true;
    this.subscription = this._friendsServce
                            .getFriends()
                            .subscribe(res => this.friends = res,
                                       error => console.log(error),
                                       () => this.loading = false);
  }

  ngOnInit(){
    this.loadData();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log('Destroyed');
  }
}
