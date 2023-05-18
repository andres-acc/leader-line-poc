import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutsideLinesComponent } from './screens/outside-lines/outside-lines.component';
import { BaseBoxComponent } from './components/base-box/base-box.component';
import { BasicComponent } from './components/basic/basic.component';
import { OutsideLinesAutomaticComponent } from './screens/outside-lines-automatic/outside-lines-automatic.component';

@NgModule({
  declarations: [
    AppComponent,
    OutsideLinesComponent,
    BaseBoxComponent,
    BasicComponent,
    OutsideLinesAutomaticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
