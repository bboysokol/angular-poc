import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemoteSubmitRef } from './shared/remote-submit.ref';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [RemoteSubmitRef],
  bootstrap: [AppComponent],
})
export class AppModule {}
