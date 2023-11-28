import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { LibraryComponent } from './library/library.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BorrowerLoginComponent } from './login/borrower-login/borrower-login.component';
import { BorrowerDashboardComponent } from './borrower-dashboard/borrower-dashboard.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { AdminAfterloginComponent } from './admin-afterlogin/admin-afterlogin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingMainComponent,
    LibraryComponent,
    HomeComponent,
    ContactComponent,
    BorrowerLoginComponent,
    BorrowerDashboardComponent,
    AdminLoginComponent,
    AdminAfterloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
