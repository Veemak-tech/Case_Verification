import { Component, OnInit } from '@angular/core';
import { userListDB } from 'src/app/shared/tables/list-users';
import {AuthService} from "src/app/services/auth.service"

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  
  userlist :any;

  constructor(private user:AuthService) {
  
    this.user.getData().subscribe(data=>{
     console.warn(data);
      this.userlist=data;
    })
  }

  

  public settings = {
    actions: {
      position: 'right'
    }, 
    columns: {
      
      id: {
        title: 'ID',
      },
      name: {
        title: 'Name'
      },
      email: {
        title: 'Email'
      },
      date: {
        title: 'date'
      },
      RoleID: {
        title: 'Role'
      },
    },
  };

  ngOnInit() {
  }

}

