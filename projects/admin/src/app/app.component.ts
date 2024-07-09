import { RouterLink, RouterOutlet } from '@angular/router';


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
],

})
export class AppComponent {
  title = 'admin';
}
