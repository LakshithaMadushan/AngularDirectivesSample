import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgIfComponentComponent } from './ng-if-component/ng-if-component.component';
import { NgForComponentComponent } from './ng-for-component/ng-for-component.component';
import { NgSwitchComponentComponent } from './ng-switch-component/ng-switch-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponentComponent,
    NgForComponentComponent,
    NgSwitchComponentComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
