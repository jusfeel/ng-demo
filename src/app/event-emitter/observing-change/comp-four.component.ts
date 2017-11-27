import { Component, OnInit } from "@angular/core";
import { DispatchService } from "./dispatch.service"

@Component({
    selector: "app-comp-four",
    template: `<div style="margin-left:40px;background-color: black; color:white;">
                <h2>Comp Four - {{message}}</h2>
              </div>
              `
})
export class CompFourComponent implements OnInit {

    message: string = "same old day";

    constructor(public dispatchService: DispatchService) {

    }

    ngOnInit() {
        // receiving comp
        this.dispatchService.dispatch.subscribe((value: any) => {
           if(value === "four") {
               this.message = "got the news";
           }
        });
    }

}
