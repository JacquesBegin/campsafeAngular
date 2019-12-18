import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})

export class BindingComponent {
  username: string = "";
  usernameEmpty: boolean = true;

  onInputUsername(event: Event) {
    if ((<HTMLInputElement>event.target).value !== "") {
      this.usernameEmpty = false;
    } else {
      this.usernameEmpty = true;
    };
  }



  
}