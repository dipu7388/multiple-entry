// 9fbef606107a605d69c0edbcd8029e5d_SYMPHONY

import { ButtonComponent } from '@multi-entry/button'
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-dummy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent {

}

export const L3ComponentsModule = [ButtonComponent, DummyComponent] as const;
