import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  Username="";
  Password=""

  constructor( private router:Router,private autheticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  navigateToSignUp(){
    this.router.navigate(['signup']);
  }
  calllogin(){
    console.log("hello");
    this.autheticationService.login(this.Username,this.Password).subscribe((isLogin)=>{
      console.log("login Succssessfully");
      if(isLogin){
        this.router.navigate(['dashboard']);
      }
      else{
       console.log("username or password is wrong")    
      }
    });
    console.log(this.Username);
  }
}  
