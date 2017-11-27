import { Component, OnInit } from "@angular/core";
import { DispatchService } from "./dispatch.service"


@Component({
    selector: "app-comp-two",
    template: `<div class="bg-primary" style="margin-left:40px;">
                 <h2>Comp Two - {{message}}</h2>
                 <app-comp-three></app-comp-three>
                </div>`
})
export class CompTwoComponent {
  message: string = "same old day";

  constructor(public dispatchService: DispatchService) {

  }

  ngOnInit() {
      // receiving comp
      this.dispatchService.dispatch.subscribe((value: any) => {
         if(value === "two") {
             this.message = "got the news";
         }
      });
  }
}
