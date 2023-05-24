import { NgModule } from '@angular/core';
import { WmLeaderLineComponent } from './wm-leader-line.component';
import { StraightDiagramComponent } from './components/wm-straight-diagram/wm-straight-diagram.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    WmLeaderLineComponent,
    StraightDiagramComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WmLeaderLineComponent,
    StraightDiagramComponent
  ]
})
export class WmLeaderLineModule { }
