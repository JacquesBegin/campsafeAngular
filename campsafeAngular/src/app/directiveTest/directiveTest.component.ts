import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directiveTest.component.html',
  styleUrls: ['./directiveTest.component.css']
})

export class DirectiveTestComponent {
  display: boolean = false;
  countLog = [];

  onClickLogCount() {
    this.countLog.push(new Date());
    this.display = !this.display;
  }

}