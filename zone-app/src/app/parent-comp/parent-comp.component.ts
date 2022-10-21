import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  cpt = {value:0}
  constructor() {

  }

  ngOnInit(): void {
  }

  inc(){
    this.cpt.value+=1
  }

}
