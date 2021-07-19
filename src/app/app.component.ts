import { Component } from '@angular/core';
import { LogUpdateService } from './log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogUpdateService]
})
export class AppComponent {
  title = 'counting';
  
    constructor (private logUpdateService: LogUpdateService){
	  
/*	  document.addEventListener(
	    "visibilitychange",
		() => {
		  if (document.hidden){
             console.log("document is hidden");
		  }else{
                  document.location.reload();
				 
                   
		  }			  			  
		}
		);*/
  }
  
  ngOnInit(): void { 
     
      this.logUpdateData(); 
  }
   
  logUpdateData() {
       this.logUpdateService.getAvailableUpdate();
  }
  
  checkForUpdates(){
	  this.logUpdateService.checkForUpdates();
  }
  
}
