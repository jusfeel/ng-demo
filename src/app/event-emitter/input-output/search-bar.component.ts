import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-search-bar',
  template: `<div class="form-group">
              <input type="text" class="form-control" name="keyword"
                (keyup)="search($event.target.value)"/>
             </div>`
})
export class SearchBarComponent implements OnInit {

  @Output() searchResults: EventEmitter<any> = new EventEmitter;

  constructor( private http: Http) { }

  ngOnInit() {
  }

  search(keyword: string) {
    if(keyword) {
      const url = `https://api.stackexchange.com//2.2/search?order=desc&sort=activity&site=stackoverflow&intitle=${keyword}`;
      let results: Observable<any> = this.http.get(url)
                                      .debounceTime(1000)
                                      .distinctUntilChanged().map( res => res.json().items )
                                      .catch( err => Observable.throw(err) );
      this.searchResults.emit(results);
    }
  }

}
