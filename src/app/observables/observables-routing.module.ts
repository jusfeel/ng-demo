import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ObSimpleComponent } from './ob-simple/ob-simple.component';
import { ObErrorHandlingComponent } from './ob-error-handling/ob-error-handling.component';
import { ObUnsubComponent } from './ob-unsub/ob-unsub.component';
import { ObRetryComponent } from './ob-retry/ob-retry.component';
import { ObRetryWhenComponent } from './ob-retry-when/ob-retry-when.component';
import { ObRxjsStreamsComponent } from './ob-rxjs-streams/ob-rxjs-streams.component';
import { ObRxjsCachingComponent } from './ob-rxjs-caching/ob-rxjs-caching.component';
import { ObReactiveComponent } from './ob-reactive/ob-reactive.component';

const routes : Routes = [
  { path: "simple", component: ObSimpleComponent },
  { path: "error-handling", component: ObErrorHandlingComponent },
  { path: "unsub", component: ObUnsubComponent },
  { path: "retry", component: ObRetryComponent },
  { path: "retry-when", component: ObRetryWhenComponent },
  { path: "rxjs-streams", component: ObRxjsStreamsComponent},
  { path: "rxjs-caching", component: ObRxjsCachingComponent},
  { path: "reactive", component: ObReactiveComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ObservablesRoutingModule { }
