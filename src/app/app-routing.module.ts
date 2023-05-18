import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutsideLinesComponent } from './screens/outside-lines/outside-lines.component';
import { BasicComponent } from './components/basic/basic.component';

const routes: Routes = [
  {
    path: 'outside-lines',
    component: OutsideLinesComponent
  },
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'outside-lines'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
