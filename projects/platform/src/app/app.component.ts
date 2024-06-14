import { RouterLink, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConfigModule } from '@config';
import { CoreModule } from '@core';
import { MultiEntryComponent } from '@multi-entry';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    CoreModule,
    ConfigModule,
    MultiEntryComponent,
    TestComponent,
  ],
})
export class AppComponent {
  title = 'platform';
}
