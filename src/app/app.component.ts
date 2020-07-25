import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  counterList: any = [];
  selectedItems: any = [];
  currentNumber;
  tempArray = [];
  status;
  selectedNumbers: any = [];

  ngOnInit() {
    this.counter(90);
    this.tempArray.push.apply(this.tempArray, this.counterList);

  }

  counter(i: number) {
    let x = 1;
    while (this.counterList.length < i) {
      this.counterList.push(x);
      x++;
    }
    Object.freeze(this.counterList);
    return this.counterList;  
  }

  groupArray(data, n) {
    let group = new Array();
​
    for (let i = 0, j = 0; i < data.length; i++) {
        if (i >= n && i % n === 0)
            j++;
        group[j] = group[j] || [];
        group[j].push(data[i])
    }
    return group;
  }

  randomNumberGenerate() {
    var num = Math.floor(Math.random() * this.tempArray.length);
    var roll = this.tempArray.splice(num, 1)
    this.currentNumber = roll[0];
    this.selectedNumbers.push(this.currentNumber);
    if(this.tempArray.length == 0) {
      this.status = 'Well Played!'
    }
  }

  reset() {
    location.reload();

  }


}
