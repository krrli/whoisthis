import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ENV_PROVIDERS } from '../environments/environment';
import { AppComponent } from './app.component';
import { TakeAPictureComponent } from './take-a-picture/take-a-picture.component';

@NgModule({
  declarations: [AppComponent, TakeAPictureComponent],
  imports: [BrowserModule],
  providers: [ENV_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
