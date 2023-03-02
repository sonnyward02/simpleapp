import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Activity 3 Part 1';
  displaynavbar = true;

  toggleNavBar() {
    this.displaynavbar = !this.displaynavbar;
  }
}
