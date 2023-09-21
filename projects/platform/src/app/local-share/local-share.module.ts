import { ConfigModule } from '@config';
import { CoreModule } from '@core';
import { LocalShareComponent } from './local-share.component';
import { MultiEntryModule } from '@multi-entry';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
  ],
  imports: [
    CoreModule,
    ConfigModule,
    MultiEntryModule,
    LocalShareComponent
  ],
  exports: [LocalShareComponent]
})
export class LibShareModule { }
