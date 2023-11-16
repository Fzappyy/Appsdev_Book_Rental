import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { ContactComponent } from './contact/contact.component';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { BorrowerRegistrationComponent } from './borrower-registration/borrower-registration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: LandingMainComponent }, 
  { path: 'borrower-registration', component: BorrowerRegistrationComponent},
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
