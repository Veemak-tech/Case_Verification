import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdminauthService } from "src/app/services/adminauth.service";

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

  isAuthenticated = false;

  constructor(private adminauthservice: AdminauthService, private router: Router) {}


  ngOnInit(): void {
    this.adminauthservice.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });
  }
  logout(): void {
    localStorage.removeItem("token");
    this.adminauthservice.isUserLoggedIn$.next(false);
    this.router.navigate(["admin"]);
  }

}
