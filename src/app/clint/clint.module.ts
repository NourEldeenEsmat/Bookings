import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClintDashboardComponent } from './pages/clint-dashboard/clint-dashboard.component';


const routes: Routes = [ { path: '', component:  ClintDashboardComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ClintModule { }
