// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Api/login/login.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { RegisterComponent } from './Api/register/register.component';
import { FeedbackListingComponent } from './Feedbacks/feedback-listing/feedback-listing.component';
import { FeedbackCreateComponent } from './Feedbacks/feedback-create/feedback-create.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'feedbacks', component: FeedbackListingComponent },
  { path: 'feedbacks/create', component: FeedbackCreateComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
