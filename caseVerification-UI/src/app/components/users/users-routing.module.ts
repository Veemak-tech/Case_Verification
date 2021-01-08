import { UserEditComponent } from './user-edit/user-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserComponent } from '../products/digital/user/user.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-user',
        component: ListUserComponent,
        data: {
          title: "User List",
          breadcrumb: "User List"
        }
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
        data: {
          title: "Create User",
          breadcrumb: "Create User"
        }
      },
      {
<<<<<<< HEAD
        path: 'edit-user',
        component: EditUserComponent,
        data: {
          title: "Edit User",
          breadcrumb: "Edit User"
        }
      }
     ]
=======
        path: 'user-edit',
        component: UserEditComponent,
        data: {
          title: "User edit",
          breadcrumb: "User Edit"
        }
      },
    ]
>>>>>>> ac432ef4acd26f566243eaa41e4904b3c9ee39c5
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
