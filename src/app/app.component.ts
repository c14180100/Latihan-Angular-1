import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  a = 0; b = 0;
  total = [];
  totals;
  str = "";

  clear(){
    
  }

  calc(){
    if(Math.pow(this.a,this.b) % 2 == 1){
      for(let i = this.b-1; i >= 0; i--){
        
      }
    }
    else{
      for(let i = this.b; i < Math.pow(this.a,this.b); i++){
        for(let j = 0; j < i; j++){
          this.str += "*";
        }
        this.total.push(this.str);
        this.str = "";
      }
    }

  }

}
