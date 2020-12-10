import { CaselistComponent } from './components/caselist/caselist.component';
import { CasecreationComponent } from './components/casecreation/casecreation.component';
import { CaseverificationComponent } from './components/caseverification/caseverification.component';
// import { ThirdpartydetailsComponent } from './components/thirdpartydetails/thirdpartydetails.component';
// import { AppusersComponent } from './components/appusers/appusers.component';
// import { DocumentsComponent } from './components/documents/documents.component';
// import { CasedetailsComponent } from './components/casedetails/casedetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { content } from './shared/routes/content-routes';
// import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';
// import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/casecreation', pathMatch: 'full'
  },
  // {
  //   path: '',
  //   component: ContentLayoutComponent,
  //   children: content
  // },
  // {
  //   path: 'auth/login',
  //   component: LoginComponent,
  // },
  // { path: 'appusers', component: AppusersComponent},
  // { path: 'casedetails', component: CasedetailsComponent},
  // { path: 'documents', component: DocumentsComponent},
  // { path: 'thirdpartydetails', component: ThirdpartydetailsComponent},
  { path: 'caseverification', component: CaseverificationComponent},
  { path: 'casecreation', component: CasecreationComponent},
  { path: 'caselist', component: CaselistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
