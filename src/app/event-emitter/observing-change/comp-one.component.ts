import { Component, OnInit } from "@angular/core";
import { DispatchService } from "./dispatch.service"

@Component({
    selector: "app-comp-one",
    template: `<div class="bg-warning" style="margin-left:40px;">
                 <h2>Comp One - {{message}}</h2>
                 <app-comp-two></app-comp-two>
                </div>`
})
export class CompOneComponent {
  message: string = "same old day";

  constructor(public dispatchService: DispatchService) {

  }

  ngOnInit() {
      // receiving comp
      this.dispatchService.dispatch.subscribe((value: any) => {
         if(value === "one") {
             this.message = "got the news";
         }
      });
  }
}
