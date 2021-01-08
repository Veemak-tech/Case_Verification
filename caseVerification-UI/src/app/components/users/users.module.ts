import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UsersRoutingModule } from './users-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [ListUserComponent, CreateUserComponent, EditUserComponent],
=======
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [ListUserComponent, CreateUserComponent, UserEditComponent],
>>>>>>> ac432ef4acd26f566243eaa41e4904b3c9ee39c5
  imports: [
    CommonModule,
    NgbModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
