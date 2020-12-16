import { Test1Component } from './components/test1/test1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { content } from './shared/routes/content-routes';
import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';
import { LoginComponent } from './components/auth/login/login.component';
<<<<<<< HEAD
import { } from "./services/auth-guard.service"
=======
>>>>>>> 02b95bcb94b28d92766105b80062fe8070f4e7ee

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/default',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: content
  },
  {
    path: 'auth/login',
    component: LoginComponent,
<<<<<<< HEAD
    
=======
>>>>>>> 02b95bcb94b28d92766105b80062fe8070f4e7ee
  },

  {
    path: 'test1', component: Test1Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
