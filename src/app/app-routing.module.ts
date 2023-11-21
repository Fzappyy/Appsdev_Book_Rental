import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { ContactComponent } from './contact/contact.component';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { BorrowerRegistrationComponent } from './borrower-registration/borrower-registration.component';
import { BorrowerLoginComponent } from './login/borrower-login/borrower-login.component';
import { BorrowerDashboardComponent } from './borrower-dashboard/borrower-dashboard.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { AdminAfterloginComponent } from './admin-afterlogin/admin-afterlogin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: LandingMainComponent }, 
  { path: 'borrower-registration', component: BorrowerRegistrationComponent},
  { path: 'borrower-login', component: BorrowerLoginComponent},
  { path: 'borrower-dashboard', component: BorrowerDashboardComponent},
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'admin-afterlogin', component: AdminAfterloginComponent},
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
