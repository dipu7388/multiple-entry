import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { L3ComponentsModule } from '@multi-entry/l3-components';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, L3ComponentsModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

}
