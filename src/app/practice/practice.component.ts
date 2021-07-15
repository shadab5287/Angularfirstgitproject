import { Component, Input, OnInit, Output, EventEmitter,ViewChild, OnChanges } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit,OnChanges {
  @Input() kid="";
  @Output() box=new EventEmitter<any>();
  name="avinash";
  attributes="use of  [ngstyle]";
  showorHide=true;

  constructor(private authentication:AuthenticationService) {
    this.authentication.myObservale().subscribe((data)=>{
      console.log("My data =====>>",data);
  })
   }
   ngOnChanges(){
     console.log("ngonchanges called")
   }
  

  ngOnInit(): void {
    console.log("ngoninit called")
  }
  studio(){
    this.box.emit("child to parents");
    this.showorHide=!this.showorHide;
  }

}
