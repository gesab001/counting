import { Component, OnInit, HostListener } from '@angular/core';

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


 @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
     var key = event.key;
     console.log(key);
     if(key==="Enter"){
        console.log("you pressed enter");
        event.preventDefault();
        this.steps = parseInt(document.getElementById("stepNumber").innerText);
        var ones = document.getElementById("onesNumber").innerText;
        var tens = document.getElementById("tensNumber").innerText;
        var number = tens + ones;
        this.count = parseInt(tens + ones);
        console.log("count" + tens);
     }  
  }
  
  ngOnInit(): void {
  }

  reset(){
                      document.location.reload();
  }
  
  add(){
   // alert("hello");
   this.steps = parseInt(document.getElementById("stepNumber").innerText);
   
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
        else  if(splitnumbers.length==4){
            this.thousands = splitnumbers[splitnumbers.length-4];

            this.hundreds = splitnumbers[splitnumbers.length-3];
            this.tens = splitnumbers[splitnumbers.length-2];
            this.ones = splitnumbers[splitnumbers.length-1] ; 
        }  
        else  if(splitnumbers.length==5){
            this.thousands = splitnumbers[splitnumbers.length-5] + splitnumbers[splitnumbers.length-4];

            this.hundreds = splitnumbers[splitnumbers.length-3];
            this.tens = splitnumbers[splitnumbers.length-2];
            this.ones = splitnumbers[splitnumbers.length-1] ; 
        }  
        else  if(splitnumbers.length==6){
            this.thousands = splitnumbers[splitnumbers.length-6] + splitnumbers[splitnumbers.length-5] + splitnumbers[splitnumbers.length-4];

            this.hundreds = splitnumbers[splitnumbers.length-3];
            this.tens = splitnumbers[splitnumbers.length-2];
            this.ones = splitnumbers[splitnumbers.length-1] ; 
        } 
	  
    }
  }
  
   minus(){
   // alert("hello");
   this.steps = parseInt(document.getElementById("stepNumber").innerText);
     for (var x=0; x<this.steps; x++){
       if(this.count>0)
         this.count = this.count - 1;
         var splitnumbers = this.count.toString().split("");

          if(splitnumbers.length==1){
           this.ones = splitnumbers[0];
           this.tens = "0";
           this.hundreds = "0";
           this.thousands = "0";
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
        else  if(splitnumbers.length==4){
            this.thousands = splitnumbers[splitnumbers.length-4];

            this.hundreds = splitnumbers[splitnumbers.length-3];
            this.tens = splitnumbers[splitnumbers.length-2];
            this.ones = splitnumbers[splitnumbers.length-1] ; 
        }  
        else  if(splitnumbers.length==5){
            this.thousands = splitnumbers[splitnumbers.length-5] + splitnumbers[splitnumbers.length-4];

            this.hundreds = splitnumbers[splitnumbers.length-3];
            this.tens = splitnumbers[splitnumbers.length-2];
            this.ones = splitnumbers[splitnumbers.length-1] ; 
        }  
        else  if(splitnumbers.length==6){
            this.thousands = splitnumbers[splitnumbers.length-6] + splitnumbers[splitnumbers.length-5] + splitnumbers[splitnumbers.length-4];

            this.hundreds = splitnumbers[splitnumbers.length-3];
            this.tens = splitnumbers[splitnumbers.length-2];
            this.ones = splitnumbers[splitnumbers.length-1] ; 
        } 
	  

     }   
  }
 
 onUnitChange(event){
    console.log(event.which);
 } 
  
  onStepsChange(event){
   // alert (event.target.innerText);
   //this.steps = parseInt(event.target.innerText);
  }
  
  stepUp(){
    this.steps = this.steps + 1;
    console.log(this.steps);
    document.getElementById("stepNumber").innerText = this.steps.toString();
  }
  
  stepDown(){
    this.steps = this.steps - 1;
    if (this.steps<0){
       this.steps = 0;
    }    
    document.getElementById("stepNumber").innerText = this.steps.toString();
    
  }
  
}
