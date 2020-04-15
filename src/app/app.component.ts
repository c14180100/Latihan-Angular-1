import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  a = 0; b = 0;
  x = 0; y = 0;
  total = [];
  totals;
  str = "";

  clear(){
    
  }

  calc(){
    if(Math.pow(this.a,this.b) % 2 == 1){
      var x = this.a;
      var y = this.b;
      if(this.b > this.a){
        for(let i = 1; i <= this.b; i++){
          for(let j = 0; j < i; j++){
            this.str += "*";
          }
          for(let j = 0; j < x; j++){
            this.str += "o";
          }
          x--;
          this.total.push(this.str);
          this.str = "";
        }
      } else{
        for(let i = 1; i <= this.a; i++){
          for(let j = 0; j < i; j++){
            this.str += "*";
          }
          for(let j = 0; j < y; j++){
            this.str += "o";
          }
          y--;
          this.total.push(this.str);
          this.str = "";
        }
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
