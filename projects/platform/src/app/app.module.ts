import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
// import { ButtonComponent } from '@multi-entry/button'
import { ConfigModule } from '@config';
import { CoreModule } from '@core';
import { MultiEntryModule } from '@multi-entry';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ConfigModule,
    MultiEntryModule,
    // ButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
