import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-multi-entry',
  template: `
    <p>
      multi-entry works!
    </p>
  `,
  styles: [
  ],
  standalone: true,
  imports: [CommonModule]
})
export class MultiEntryComponent {

}
