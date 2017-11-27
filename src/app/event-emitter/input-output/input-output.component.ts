import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/Rx';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html'
})
export class InputOutputComponent implements OnInit {

  results: ReplaySubject<any>;

  constructor() { }

  ngOnInit() {
    this.results = new ReplaySubject(null);
  }

}
