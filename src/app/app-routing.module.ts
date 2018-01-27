import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ListComponent } from './list/list.component';
import { TotalsComponent } from './totals/totals.component';
import { CellsComponent } from './cells/cells.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'totals/:id', component: TotalsComponent },
  { path: 'cells/:id', component: CellsComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
