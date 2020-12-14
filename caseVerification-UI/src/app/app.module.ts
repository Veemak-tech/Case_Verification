import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './components/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './components/products/products.module';
import { SalesModule } from './components/sales/sales.module';
import { CouponsModule } from './components/coupons/coupons.module';
import { PagesModule } from './components/pages/pages.module';
import { MediaModule } from './components/media/media.module';
import { MenusModule } from './components/menus/menus.module';
import { VendorsModule } from './components/vendors/vendors.module';
import { UsersModule } from './components/users/users.module';
import { LocalizationModule } from './components/localization/localization.module';
import { InvoiceModule } from './components/invoice/invoice.module';
import { SettingModule } from './components/setting/setting.module';
import { ReportsModule } from './components/reports/reports.module';
import { AuthModule } from './components/auth/auth.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CasedetailsComponent } from './components/casedetails/casedetails.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ThirdpartydetailsComponent } from './components/thirdpartydetails/thirdpartydetails.component';
import { CaseverificationComponent } from './components/caseverification/caseverification.component';
import { CasecreationComponent } from './components/casecreation/casecreation.component';
import { CaselistComponent } from './components/caselist/caselist.component';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Caseverification2Component } from './components/caseverification2/caseverification2.component';


@NgModule({
  declarations: [
    AppComponent,
    CasedetailsComponent,
    DocumentsComponent,
    ThirdpartydetailsComponent,
    CaseverificationComponent,
    CasecreationComponent,
    CaselistComponent,
    Caseverification2Component,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    DashboardModule,
    InvoiceModule,
    SettingModule,
    ReportsModule,
    AuthModule,
    SharedModule,
    LocalizationModule,
    ProductsModule,
    SalesModule,
    VendorsModule,
    CouponsModule,
    PagesModule,
    MediaModule,
    MenusModule,
    UsersModule,
    CKEditorModule,
    HttpClientModule,
    FormsModule,
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
