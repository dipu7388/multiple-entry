
import { Component } from '@angular/core';
import { CoreModule } from '@core';
import { L3ComponentsModule } from '@multi-entry/l3-components';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  standalone: true,
  imports: [L3ComponentsModule, CoreModule]
})
export class AccountComponent {

}
