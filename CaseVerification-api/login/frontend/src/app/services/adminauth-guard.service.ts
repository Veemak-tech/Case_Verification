import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { Observable } from "rxjs";
import { AdminauthService } from "./adminauth.service";

@Injectable({
  providedIn: "root",
})
export class AdminauthGuard implements CanActivate {
  constructor(private adminauthService: AdminauthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    if (!this.adminauthService.isUserLoggedIn$.value) {
      this.router.navigate(["signup"]);
    }
    return this.adminauthService.isUserLoggedIn$;
  }
}
