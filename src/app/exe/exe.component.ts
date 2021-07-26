import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe',
  templateUrl: './exe.component.html',
  styleUrls: ['./exe.component.css']
})
export class ExeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
raymond(mydata:any){
console.log("data",mydata)
};
}
 