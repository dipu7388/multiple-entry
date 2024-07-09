import { ButtonComponent } from '@multi-entry/button';

import { Component } from '@angular/core';
import { LibShareModule } from '../local-share/local-share.module';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [ButtonComponent, LibShareModule],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

}
