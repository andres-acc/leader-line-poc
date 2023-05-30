import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutsideLinesComponent } from './screens/outside-lines/outside-lines.component';
import { BasicComponent } from './components/basic/basic.component';
import { OutsideLinesAutomaticComponent } from './screens/outside-lines-automatic/outside-lines-automatic.component';
import { MenuComponent } from './screens/menu/menu.component';
import { ModelApproachComponent } from './screens/model-approach/model-approach.component';
import { LibraryImplementationComponent } from './screens/library-implementation/library-implementation.component';
import { BarrancaExampleComponent } from './screens/barranca-example/barranca-example.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'outside-lines',
    component: OutsideLinesComponent
  },
  {
    path: 'outside-lines-automatic',
    component: OutsideLinesAutomaticComponent
  },
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'model-grid',
    component: ModelApproachComponent
  },
  {
    path: 'library-implementation',
    component: LibraryImplementationComponent
  },
  {
    path: 'barranca-library-implementation',
    component: BarrancaExampleComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'menu'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
