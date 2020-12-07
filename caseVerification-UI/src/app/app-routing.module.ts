import { AppusersComponent } from './components/appusers/appusers.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { CasedetailsComponent } from './components/casedetails/casedetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { content } from './shared/routes/content-routes';
import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';
import { LoginComponent } from './components/auth/login/login.component';

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
  },
  { path: 'appusers', component: AppusersComponent},
  { path: 'casedetails', component: CasedetailsComponent},
  { path: 'documents', component: DocumentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
