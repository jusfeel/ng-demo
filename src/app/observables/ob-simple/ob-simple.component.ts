import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-ob-simple',
  templateUrl: './ob-simple.component.html',
  styleUrls: ['./ob-simple.component.css']
})
export class ObSimpleComponent implements OnInit {

  private data: Observable<number>;
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;

  constructor() { }

  ngOnInit() {
  }

  init() {
      this.data = new Observable(observer => {
          setTimeout(() => {
              observer.next(42);
          }, 1000);

          setTimeout(() => {
              observer.next(43);
          }, 2000);

          setTimeout(() => {
              observer.next(44);
          }, 3000);

          setTimeout(() => {
              observer.complete();
          }, 4000);
      });

      let subscription = this.data.subscribe(
          value => this.values.push(value),
          error => this.anyErrors = true,
          () => this.finished = true
      );
  }

}
