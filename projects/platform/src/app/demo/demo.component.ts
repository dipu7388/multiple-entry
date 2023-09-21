import { ButtonComponent } from '@multi-entry/button';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LibShareModule } from '../local-share/local-share.module';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, ButtonComponent, LibShareModule ],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

}
