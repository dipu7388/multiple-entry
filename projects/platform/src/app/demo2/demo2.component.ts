import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { L3ComponentsModule } from '@multi-entry/l3-components';
import { LibShareModule } from '../local-share/local-share.module';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [CommonModule, L3ComponentsModule, LibShareModule],
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {

}
