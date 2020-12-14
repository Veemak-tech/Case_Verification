import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdminauthService } from 'src/app/services/adminauth.service';

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;

  constructor(private authService: AuthService,
    private adminauthService: AdminauthService, 

    private router: Router) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });
 }

  logout(): void {
    localStorage.removeItem("token");
    this.authService.isUserLoggedIn$.next(false);
    this.router.navigate(["login"]);
  }
  adminlogout():void{
    localStorage.removeItem("token");
    this.adminauthService.isUserLoggedIn$.next(false);
    this.router.navigate(["admin"])
  }
}

