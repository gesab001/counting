import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {


  ones = 0;
  steps = 1;
  constructor() { }

  ngOnInit(): void {
  }

  add(){
   // alert("hello");
    if (this.ones<9){
    this.ones = this.ones + this.steps;
    }else{
       this.ones = 0;
    }    
  }
  
   minus(){
   // alert("hello");
    if (this.ones>0){
    this.ones = this.ones - this.steps;
    }else{
       this.ones = 9;
    }    
  }
}
