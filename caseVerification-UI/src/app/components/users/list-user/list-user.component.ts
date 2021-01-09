<<<<<<< HEAD
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { userListDB } from 'src/app/shared/tables/list-users';
import { AuthService } from "src/app/services/auth.service"
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
=======
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { userListDB } from 'src/app/shared/tables/list-users';
import {AuthService} from "src/app/services/auth.service";

>>>>>>> ac432ef4acd26f566243eaa41e4904b3c9ee39c5

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
<<<<<<< HEAD

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
=======

  userlist :any;

  constructor(
    private user:AuthService,
    private httpClient: HttpClient,
    private router: Router
    ){
    this.user.getData().subscribe(data=>{
     console.warn(data);
      this.userlist=data;
    })

  }

  // custom action
  public onCustomAction(event) {
    debugger;
    switch (event.action){
      case 'viewrecord':
        this.viewRecord(event.data);
        break;
        case 'editrecord':
          this.editRecord(event.data);
    }
  }

  public editRecord(formData: any) {
    let rowdata = formData;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "id": rowdata.id,
      },
    };

    this.router.navigate(['/users/user-edit'], navigationExtras);
    this.sendValues.emit(rowdata.CaseID);
  }

  public viewRecord(formData:any){
    let rowdata = formData;
    let CaseID = rowdata.CaseID;
    let Name = rowdata.Name;
    let Description = rowdata.Description;
    let InsurerVerificationNotes = rowdata.InsurerVerificationNotes;
    let T_VerificationNotes = rowdata.T_VerificationNotes;
    let CreatedBy = rowdata.CreatedBy;
  }

  @Output() sendValues = new EventEmitter<any>();

  handleRowSelect(event) {
    let rowdata = event.data;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "id": rowdata.id,
      },
    };
    this.router.navigate(['/users/user-edit'], navigationExtras);
    this.sendValues.emit(rowdata.CaseID);
  }

  public settings = {
    actions: {
      columnTitle: 'Action',
>>>>>>> ac432ef4acd26f566243eaa41e4904b3c9ee39c5
      add: false,
      edit: false,
      delete: false,
      custom: [
<<<<<<< HEAD
        { name: 'edit', title: '<i class="ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"></i>' }
      ]

=======
        {
          name: 'editrecord',
          title:
            '<i class="ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"></i>&nbsp;&nbsp;',
        },
         { name: 'viewrecord', title: '<i class="ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"></i>' }
      ],
      position: 'left',
>>>>>>> ac432ef4acd26f566243eaa41e4904b3c9ee39c5
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

<<<<<<< HEAD
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
=======
  ngOnInit() {

>>>>>>> ac432ef4acd26f566243eaa41e4904b3c9ee39c5
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

