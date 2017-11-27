import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-ob-retry',
  templateUrl: './ob-retry.component.html',
  styleUrls: ['./ob-retry.component.css']
})
export class ObRetryComponent implements OnInit {

  private values: Array<any> = [];
  private anyErrors: boolean;
  private finished: boolean;
  private subs = [];

  constructor() { }

  ngOnInit() {
  }

  init() {
    //emit value every 1s
    const source = Observable.interval(1000);
    const example = source
      .flatMap(val => {
        //throw error for demonstration
        if(val > 5){
          return Observable.throw('Error!');
        }
        return Observable.of(val);
      })
      //retry 2 times on error
      .retry(2);
    /*
      output:
      0..1..2..3..4..5..
      0..1..2..3..4..5..
      0..1..2..3..4..5..
      "Error!: Retried 2 times then quit!"
    */
    const subscription = example
      .subscribe({
         next: val => this.values.push(val),
         error: val => this.values.push(`${val}: Retried 2 times then quit!`)
    });
    this.subs.push(subscription);
  }

  unsub(sub, i) {
    sub.unsubscribe();
    this.subs.splice(i, 1);
  }

}
