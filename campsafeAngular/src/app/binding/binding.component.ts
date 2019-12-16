import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})

export class BindingComponent {
  username: string = "";

  onEnterUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }
}