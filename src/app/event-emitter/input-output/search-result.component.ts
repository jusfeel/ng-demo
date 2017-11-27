import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html'
})
export class SearchResultComponent implements OnInit {

  @Input() results: ReplaySubject<any>;
  resultsData: Observable<any>;

  constructor() { }

  ngOnInit() {
    this.resultsData = this.results.switchMap(res => res);
  }

}
