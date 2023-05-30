import { NgModule } from '@angular/core';
import { WmLeaderLineComponent } from './wm-leader-line.component';
import { StraightDiagramComponent } from './components/wm-straight-diagram/wm-straight-diagram.component';
import { CommonModule } from '@angular/common';
import { SubgroupsDiagramComponent } from './components/wm-subgroups-diagram/wm-subgroups-diagram.component';

@NgModule({
  declarations: [
    WmLeaderLineComponent,
    StraightDiagramComponent,
    SubgroupsDiagramComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WmLeaderLineComponent,
    StraightDiagramComponent,
    SubgroupsDiagramComponent
  ]
})
export class WmLeaderLineModule { }
