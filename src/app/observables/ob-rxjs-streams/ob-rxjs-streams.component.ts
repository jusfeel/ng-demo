import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'app-ob-rxjs-streams',
  templateUrl: './ob-rxjs-streams.component.html',
  styleUrls: ['./ob-rxjs-streams.component.css']
})
export class ObRxjsStreamsComponent implements OnInit {

  concatStream = [];
  mergeStream = [];
  forkJoinStream = [];
  flatMappedStreams:any = {};

  constructor() { }

  ngOnInit() {
  }

  flatMapStreams(){
    // let first = Observable.of(10);
    let first = Observable.timer(10,500).map(r => {
      return r;
    }).take(10);

    first.flatMap((operand1) => {
      return Observable.of(operand1 + 10);
    })
    .subscribe(res => this.flatMappedStreams = {msg: 'sum = ' + res});
  }

  concatStreams(){
    let first = Observable.timer(10,500).map(r => {
      return {source:1,value:r};
    }).take(4);

    let second = Observable.timer(10,500).map(r => {
      return {source:2,value:r};
    }).take(4);

    first.concat(second).subscribe(res => this.concatStream.push(res));
  }

  mergeStreams(){
    let first = Observable.timer(10,500).map(r => {
      return {source:1,value:r};
    }).take(4);

    let second = Observable.timer(10,500).map(r => {
      return {source:2,value:r};
    }).take(4);

    first.merge(second).subscribe(res => this.mergeStream.push(res));
  }

  forkJoinStreams(){
    // let first = Observable.of({source:1,value:1});

    // let second = Observable.of({source:2,value:1});

    let first = Observable.timer(10,500).map(r => {
      return {source:1,value:r};
    }).take(4);

    let second = Observable.timer(10,500).map(r => {
      return {source:2,value:r};
    }).take(4);

    Observable.forkJoin(first,second)
              .subscribe((res:Array<any>) => this.forkJoinStream = res);
  }


}
