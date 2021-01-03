import { Component, OnInit } from '@angular/core';
import { userListDB } from 'src/app/shared/tables/list-users';
import {AdminauthService} from "src/app/services/adminauth.service"

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  
  data : any;

  constructor(private user:AdminauthService) {
  
    this.user.getData().subscribe(data=>{
     console.warn(data);
      this.data=data;
    })
  }

  

  public settings = {
    columns: {
      avatar: {
        title: 'Avatar',
        type: 'html'
      },
      fName: {
        title: 'First Name',
      },
      lName: {
        title: 'Last Name'
      },
      email: {
        title: 'Email'
      },
      last_login: {
        title: 'Last Login'
      },
      role: {
        title: 'Role'
      },
    },
  };

  ngOnInit() {
  }

}

