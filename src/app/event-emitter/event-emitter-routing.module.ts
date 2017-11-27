import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InputOutputComponent } from './input-output/input-output.component';
import { ObservingChangeComponent } from './observing-change/observing-change.component';

const routes: Routes = [
  { path: 'input-output', component: InputOutputComponent },
  { path: 'observing-change', component: ObservingChangeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class EventEmitterRoutingModule { }
