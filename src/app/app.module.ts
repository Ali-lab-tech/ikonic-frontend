import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppComponent } from './app.component';
import { LoginComponent } from './Api/login/login.component';
import { RegisterComponent } from './Api/register/register.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module'; // Import your AppRoutingModule
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackListingComponent } from './Feedbacks/feedback-listing/feedback-listing.component';
import { FeedbackCreateComponent } from './Feedbacks/feedback-create/feedback-create.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FeedbackListingComponent,
    FeedbackCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
