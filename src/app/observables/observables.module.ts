import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ObservablesRoutingModule } from './observables-routing.module';
import { ObSimpleComponent } from './ob-simple/ob-simple.component';
import { ObErrorHandlingComponent } from './ob-error-handling/ob-error-handling.component';
import { ObUnsubComponent } from './ob-unsub/ob-unsub.component';
import { ObRetryComponent } from './ob-retry/ob-retry.component';
import { ObRetryWhenComponent } from './ob-retry-when/ob-retry-when.component';
import { ObRxjsStreamsComponent } from './ob-rxjs-streams/ob-rxjs-streams.component';
import { ObRxjsCachingComponent } from './ob-rxjs-caching/ob-rxjs-caching.component';
import { FriendsList } from './ob-rxjs-caching/friends-list';
import { FriendsService } from './ob-rxjs-caching/friends-service';
import { CountryService } from './ob-reactive/country.service';
import { ObReactiveComponent } from './ob-reactive/ob-reactive.component';
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ObservablesRoutingModule
  ],
  declarations: [
    ObSimpleComponent,
    ObErrorHandlingComponent,
    ObUnsubComponent,
    ObRetryComponent,
    ObRetryWhenComponent,
    ObRxjsStreamsComponent,
    ObRxjsCachingComponent,
    FriendsList,
    ObReactiveComponent
  ],
  providers: [FriendsService, CountryService]
})
export class ObservablesModule { }
