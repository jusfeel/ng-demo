import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ob-error-handling',
  templateUrl: './ob-error-handling.component.html',
  styleUrls: ['./ob-error-handling.component.css']
})
export class ObErrorHandlingComponent implements OnInit {

  private data: Observable<number>;
  private values: Array<number> = [];
  private anyErrors: any;
  private finished: boolean;

  constructor() { }

  ngOnInit() {
  }

  init() {

    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(10)
      }, 1500);
      setTimeout(() => {
        observer.next(20)
      }, 2000);
      setTimeout(() => {
        observer.next(30)
      }, 2500);
      setTimeout(() => {
        observer.error('Hey something bad happened I guess');
      }, 3000);
      setTimeout(() => {
        observer.next(50)
      }, 3500);
    });

    let subscription = this.data.subscribe(
      value => this.values.push(value),
      error => this.anyErrors = error,
      () => this.finished = true
    );
  }

}
