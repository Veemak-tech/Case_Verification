import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { userListDB } from 'src/app/shared/tables/list-users';
import { AuthService } from "src/app/services/auth.service"
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  userlist: any;

  constructor(private user: AuthService, private router: Router, private httpclient: HttpClient) {

    this.user.getData().subscribe(data => {
      console.warn(data);
      this.userlist = data;
    })

  }



  public settings = {
    actions: {
      position: 'right',
      add: false,
      edit: false,
      delete: false,
      custom: [
        { name: 'edit', title: '<i class="ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"></i>' }
      ]

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

  public onCustomAction(event) {
    this.editRecord(event.data);
  
  }

  public editRecord(formData: any) {
    let rowdata = formData;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "Id" : rowdata.id,
      },
    };
    
    this.router.navigate(['users/edit-user'], navigationExtras);
    this.sendValues.emit(rowdata.id);
  }

  @Output() sendValues = new EventEmitter<any>();
  handleRowSelect(event) {
debugger
    let rowdata = event.data;
    let navigationExtras: NavigationExtras = {

      queryParams: {
        "Id" : rowdata.id
      }
    }
  
    this.router.navigate(['users/edit-user'], navigationExtras);
    this.sendValues.emit(rowdata.id);
  }

  ngOnInit() {

  }
}

