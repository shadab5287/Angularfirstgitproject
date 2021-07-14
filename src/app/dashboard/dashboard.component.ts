import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tableHeadingList = ["FirstName", "LastName", "Age"];
  tableData = [
    {
      firstName: "  Md",
      lastName:"Saif",
      age:20
    },
    {
      firstName: "Md",
      lastName:"Shadab",
      age:23
    },
    {
      firstName: "Md",
      lastName:"danish",
      age:22
    },{
      firstName: "Md",
      lastName:"Imran",
      age:60
    }
  ];
  constructor( private router:Router ) { }

  ngOnInit(): void {
  }
  toy(){
    console.log("kkkkk");
    this.router.navigate(['practice'])
  }

}
