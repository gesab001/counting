import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {

  
  count = 0;
  ones = "0";
  tens = "0";
  hundreds = "0";
  thousands = "0";
  steps = 1;
  constructor() { }

  ngOnInit(): void {
  }

  add(){
   // alert("hello");
   for (var x=0; x<this.steps; x++){
          this.count = this.count + 1;
          var splitnumbers = this.count.toString().split("");

          if(splitnumbers.length==1){
           this.ones = splitnumbers[0];
           }
        else if(splitnumbers.length==2){
            this.tens = splitnumbers[0];
            this.ones = splitnumbers[1];
          }  
        else  if(splitnumbers.length==3){
            this.hundreds = splitnumbers[0];
            this.tens = splitnumbers[1];
            this.ones = splitnumbers[2]; 
        }         
        else  if(splitnumbers.length==3){
            this.thousands = splitnumbers[0];
            this.hundreds = splitnumbers[1];
            this.tens = splitnumbers[2];
            this.ones = splitnumbers[3]; 
        }  


	  
    }
  }
  
   minus(){
   // alert("hello");
     for (var x=0; x<this.steps; x++){
       if(this.count>0)
         this.count = this.count - 1;
         var splitnumbers = this.count.toString().split("");

          if(splitnumbers.length==1){
           this.ones = splitnumbers[0];
           }
        else if(splitnumbers.length==2){
            this.tens = splitnumbers[0];
            this.ones = splitnumbers[1];
          }  
        else  if(splitnumbers.length==3){
            this.hundreds = splitnumbers[0];
            this.tens = splitnumbers[1];
            this.ones = splitnumbers[2]; 
        }         
        else  if(splitnumbers.length==3){
            this.thousands = splitnumbers[0];
            this.hundreds = splitnumbers[1];
            this.tens = splitnumbers[2];
            this.ones = splitnumbers[3]; 
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
  
}
