import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {

  
  
  ones = 0;
  tens = 0;
  hundreds = 0;
  thousands = 0;
  steps = 1;
  constructor() { }

  ngOnInit(): void {
  }

  add(){
   // alert("hello");
   for (var x=0; x<this.steps; x++){
	    if (this.ones<9){
	      this.ones = this.ones + 1;
	    }else{
	       this.ones = 0;
	       if (this.tens<9){
		  this.tens = this.tens + 1;
	       }else{
		  this.tens = 0;
		       if (this.hundreds<9){
			  this.hundreds = this.hundreds + 1;
		       }else{
			  this.hundreds = 0;
			       if (this.thousands<9){
				  this.thousands = this.thousands + 1;
			       }else{
				  this.thousands = 0;
				  
			       } 		  
		       }           
	       }   
	    }    
    }
  }
  
   minus(){
   // alert("hello");
     for (var x=0; x<this.steps; x++){
	    if (this.ones>0){
	    this.ones = this.ones - 1;
	    }else{
	       this.ones = 9;
	       if (this.tens==0){
		 
	       }else{
		  if (this.tens>0){
		    this.tens = this.tens - 1;
		  }else{
		   this.tens = 9;
		  
		  }
	       } 
	    }
     }   
  }
  
  stepUp(){
    this.steps = this.steps + 1;
  }
  
  stepDown(){
    this.steps = this.steps - 1;
    if (this.steps<0){
       this.steps = 0;
    }
  }
  onHundredChange(event: any){
    this.hundreds = parseInt(event.target.innerText);
  }
  
}
