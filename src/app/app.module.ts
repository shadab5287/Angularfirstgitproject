import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule, Routes,CanActivate } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PracticeComponent } from './practice/practice.component';
import { ExeComponent } from './exe/exe.component';
import { AddingsirnamePipe } from './service/addingsirname.pipe';
import { RoutingguardService } from './guard/routingguard.service';
import { CustomComponent } from './custom/custom.component';
import { DatePipe } from './service/date.pipe';


const route:Routes=[
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent,
    canActivate:[ RoutingguardService]
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"practice",
    component:PracticeComponent
  },
  {
    path:"exe",
    component:ExeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    PracticeComponent,
    ExeComponent,
    AddingsirnamePipe,
    CustomComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route)
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
