import { Component, Input, OnInit, Output, EventEmitter,ViewChild } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  @Input() kid="";
  @Output() box=new EventEmitter<any>();
  name="Shardul";

  constructor(private authentication:AuthenticationService) {
    this.authentication.myObservale().subscribe((data)=>{
      console.log("My data =====>>",data);
  })
   }
  

  ngOnInit(): void {
  }
  studio(){
    this.box.emit("child to parents")
  }

}
