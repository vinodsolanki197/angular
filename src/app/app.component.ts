import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning exercise';
  display=true;
  getData() {
    return "i am learning angular";
  }
  count = 0;
  getCounter(type:string) {
    type==='add'? this.count++ : this.count--;

  }
  changeData() {
    this.display=!this.display;
  }
}
