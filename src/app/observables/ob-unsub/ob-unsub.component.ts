import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-ob-unsub',
  templateUrl: './ob-unsub.component.html',
  styleUrls: ['./ob-unsub.component.css']
})
export class ObUnsubComponent implements OnInit {

  private data: Observable<string>;
  private value: string;
  private subscribed: boolean;
  private status: string;

  constructor() { }

  ngOnInit() {
  }

  init() {

    this.data = new Observable(observer => {
      let timeoutId1 = setTimeout(() => {
        observer.next("1");
      }, 500);
      let timeoutId2 = setTimeout(() => {
        observer.next("2");
      }, 1000);

      let timeoutId3 = setTimeout(() => {
        observer.next('You will never see this message');
      }, 2000);

      this.status = 'Started';

      return () => {
        this.subscribed = false;
        this.status = 'Finished';
        clearTimeout(timeoutId3);
      }
    });

    let subscription = this.data.subscribe(
      value => this.value = value,
      error => console.log(error),
      () => this.status = 'Finished'
    );
    this.subscribed = true;

    setTimeout(() => {
      subscription.unsubscribe();
    }, 1500);
  }

}
