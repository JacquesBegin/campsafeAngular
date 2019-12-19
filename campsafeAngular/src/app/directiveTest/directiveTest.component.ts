import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directiveTest.component.html',
  styleUrls: ['./directiveTest.component.css']
})

export class DirectiveTestComponent {
  display: boolean = false;
  count: number = 0;
  countLog = [];
  active = false;

  setDisplay() {
    this.display = this.display ? false : true;
  }

  onClickLogCount() {
    this.count++;
    this.countLog.push(this.count);
    if (this.count >= 5) {
      this.active = true;
    }
    this.setDisplay();

  }

}