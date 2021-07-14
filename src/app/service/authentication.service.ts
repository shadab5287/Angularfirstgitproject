import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  login(username:String,password:String){
    return new Observable((observe)=>{

      console.log("Login Detaiuls",username,"gkjhfjgh"+password+"fdgjhg");
      observe.next(true)
    })
  }
  signup(myName:string,
  Number:string,
  Email:string,
  Age:string,
  Username:string,
  Password:string,
  Confirmpassword:string){
    return new Observable((observe)=>{
    console.log("signup details",myName,Number,Email,Age,Username,Password,Confirmpassword);
    observe.next(true)
    })

  }
  myObservale(){
    let backend= new Observable((observer)=>{

      observer.next("I am no waitng to emit data");
      // setTimeout(function(){
      //     observer.next("hey data is there");
      // },1000);
    });

    return backend;
  }
  
}
