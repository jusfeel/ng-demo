import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-ob-retry-when',
  templateUrl: './ob-retry-when.component.html',
  styleUrls: ['./ob-retry-when.component.css']
})
export class ObRetryWhenComponent implements OnInit {

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
      .map(val => {
        if(val > 5){
         //error will be picked up by retryWhen
         throw val;
        }
        return val;
      })
      .retryWhen(errors => errors
                   //log error message
                   .do(val => this.values.push(`Value ${val} was too high!`))
                   //restart in 5 seconds
                   //.delayWhen(val => Observable.timer(val * 1000))
                );
    /*
      output:
      0
      1
      2
      3
      4
      5
      "Value 6 was too high!"
      --Wait 5 seconds then repeat
    */
    this.subs.push(example.subscribe( n => this.values.push(n)));
  }

  unsub(sub, i) {
    sub.unsubscribe();
    this.subs.splice(i, 1);
  }

}
