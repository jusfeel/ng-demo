import { Component, OnInit } from "@angular/core";
import { DispatchService } from "./dispatch.service"


@Component({
    selector: "app-comp-three",
    template: `<div class="bg-danger" style="margin-left:40px;">
                 <h2>Comp Three - {{message}}</h2>
                 <app-comp-four></app-comp-four>
                </div>`
})
export class CompThreeComponent {
  message: string = "same old day";

  constructor(public dispatchService: DispatchService) {

  }

  ngOnInit() {
      // receiving comp
      this.dispatchService.dispatch.subscribe((value: any) => {
         if(value === "three") {
             this.message = "got the news";
         }
      });
  }
}
