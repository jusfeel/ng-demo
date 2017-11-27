import { Component, OnInit } from '@angular/core';
import { FriendsService } from './friends-service';

@Component({
  selector: 'app-ob-rxjs-caching',
  templateUrl: './ob-rxjs-caching.component.html',
  styleUrls: ['./ob-rxjs-caching.component.css']
})
export class ObRxjsCachingComponent implements OnInit {

  display = {first:true, second:true};

  constructor(private _friendsService: FriendsService){
  }

  ngOnInit() {
  }

  remove(list){
    this.display[list] = false;
  }

  reset(){
    this.display = {first:true, second:true};
  }

  clearCache(){
    this._friendsService.clearCache();
  }

}
