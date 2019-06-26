import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PgDetailsComponent } from './pg-details/pg-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SafePipe } from './safe.pipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleOauthComponent } from './google-oauth/google-oauth.component';

@NgModule({
  declarations: [
    AppComponent,
    PgDetailsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SafePipe,
    SignupComponent,
    LoginComponent,
    CreateOrderComponent,
    GoogleOauthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
