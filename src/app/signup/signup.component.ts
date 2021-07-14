import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myName="";
  Number="";
  Email="";
  Age="";
  Username="";
  Password="";
  Confirmpassword="";

  constructor(private router:Router,private ks:AuthenticationService) { }

  ngOnInit(): void {
  }
  Submit(){
    console.log("Sign Up Success");
    // console.log(this.myName);
    // console.log(this.Number);
    // console.log(this.Email);
    // console.log(this.Age);
    // console.log(this.Username);
    // console.log(this.Password);
    // console.log(this.Confirmpassword);
    this.ks.signup(this.myName,this.Number,this.Email,this.Age,this.Username,
      this.Password,this.Confirmpassword).subscribe((issignup)=>{
      console.log("login Succssessfully");
    });
    
    
  }
  navigateTologin(){
    this.router.navigate([""])
  }

}
