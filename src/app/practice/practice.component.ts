import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  @Input() kid="";
  @Output() box=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  studio(){
    this.box.emit("child to parents")
  }

}
