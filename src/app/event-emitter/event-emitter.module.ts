import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EventEmitterRoutingModule } from './event-emitter-routing.module';
import { InputOutputComponent } from './input-output/input-output.component';
import { SearchBarComponent } from './input-output/search-bar.component';
import { SearchResultComponent } from './input-output/search-result.component';
import { ObservingChangeComponent } from './observing-change/observing-change.component';
import { CompOneComponent } from './observing-change/comp-one.component';
import { CompTwoComponent } from './observing-change/comp-two.component';
import { CompThreeComponent } from './observing-change/comp-three.component';
import { CompFourComponent } from './observing-change/comp-four.component';
import { DispatchService } from './observing-change/dispatch.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    EventEmitterRoutingModule
  ],
  declarations: [
    InputOutputComponent,
    SearchBarComponent,
    SearchResultComponent,
    ObservingChangeComponent,
    CompOneComponent,
    CompTwoComponent,
    CompThreeComponent,
    CompFourComponent
  ],
  providers: [ DispatchService ]
})
export class EventEmitterModule { }
