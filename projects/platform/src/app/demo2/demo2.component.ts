import { ButtonComponent } from '@multi-entry/button';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {

}
