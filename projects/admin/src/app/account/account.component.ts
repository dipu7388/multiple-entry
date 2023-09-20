import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { L3ComponentsModule } from '@multi-entry/l3-components';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  standalone: true,
  imports: [CommonModule, L3ComponentsModule]
})
export class AccountComponent {

}
