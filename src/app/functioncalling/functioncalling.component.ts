import { Component } from '@angular/core';

@Component({
  selector: 'app-functioncalling',
  templateUrl: './functioncalling.component.html',
  styleUrls: ['./functioncalling.component.css']
})
export class FunctioncallingComponent {
  getName(name:string){
    alert(name);
    console.log("button");
  }
  getBox(val:string){
    console.log(val);
  }

}
