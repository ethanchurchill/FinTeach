//Base component for the application.

import { Component } from '@angular/core';
import { Router } from '@angular/router';
//Define the selector for this component which can be used as an HTML tag
//Define the HTML and CSS files for this specific component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currUrl: any;
  constructor(private router: Router) {}
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
  //Our website title which is utilized in the app.component.html
  title = 'FinTeach';
}
