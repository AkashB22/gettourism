import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgDetailsComponent } from './pg-details/pg-details.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CreateOrderComponent } from './create-order/create-order.component';

const routes: Routes = [
  { path:'pgInfo', component: PgDetailsComponent },
  { path:'home', component: HomeComponent },
  { path:'signup', component: SignupComponent },
  { path:'login', component: LoginComponent },
  { path:'createOrder', component: CreateOrderComponent },
  { path:'pgDetails', component: PgDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
