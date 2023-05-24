import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutsideLinesComponent } from './screens/outside-lines/outside-lines.component';
import { BasicComponent } from './components/basic/basic.component';
import { OutsideLinesAutomaticComponent } from './screens/outside-lines-automatic/outside-lines-automatic.component';
import { MenuComponent } from './screens/menu/menu.component';
import { ModelApproachComponent } from './screens/model-approach/model-approach.component';
import { LibraryImplementationComponent } from './screens/library-implementation/library-implementation.component';
import { WmLeaderLineModule } from 'wm-leader-line';

@NgModule({
  declarations: [
    AppComponent,
    OutsideLinesComponent,
    BasicComponent,
    OutsideLinesAutomaticComponent,
    MenuComponent,
    ModelApproachComponent,
    LibraryImplementationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WmLeaderLineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
