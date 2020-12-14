import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./services/auth-guard.service";
import { AdminauthGuard} from "./services/adminauth-guard.service";

import { HomeComponent } from "./components/home/home.component";
import { PostsComponent } from "./components/posts/posts.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";

  import { from } from 'rxjs';
import { AdminComponent } from './components/admin/admin.component';
import { CaseComponent } from './components/case/case.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "posts", component: PostsComponent, canActivate: [AuthGuard] },
  { path: "case", component: CaseComponent,canActivate:[AdminauthGuard]},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "admin", component: AdminComponent },
  
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
