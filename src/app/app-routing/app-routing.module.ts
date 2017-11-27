import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { UserListComponent } from '../account/user-list/user-list.component';

const routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full'},
  { path: 'form', component: UserListComponent },
  { path: 'observables', loadChildren: '../observables/observables.module#ObservablesModule' },
  { path: 'event-emitter', loadChildren: '../event-emitter/event-emitter.module#EventEmitterModule' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
