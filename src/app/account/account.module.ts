import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserFormReactiveComponent } from './user-form-reactive/user-form-reactive.component';
import { UserViewSimpleComponent } from './user-view-simple/user-view-simple.component';
import { UsernameNotTakenDirective } from './username-not-taken.directive';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    UserListComponent,
    UserFormComponent,
    UserFormReactiveComponent,
    UserViewSimpleComponent,
    UsernameNotTakenDirective
  ],
  providers: [
    UserService
  ]
})
export class AccountModule { }
