import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { L3ComponentsModule } from '@multi-entry/l3-components';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [CommonModule, L3ComponentsModule],
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {

}
