import { Component, OnInit } from '@angular/core';
import { DispatchService } from "./dispatch.service";

@Component({
  selector: 'app-observing-change',
  templateUrl: './observing-change.component.html',
  styleUrls: ['./observing-change.component.css']
})
export class ObservingChangeComponent implements OnInit {

  constructor(private dispatchService: DispatchService) { }

  ngOnInit() {
  }

  somethingChanged(s:string) {
    this.dispatchService.dispatch.next(s);
  }

}
