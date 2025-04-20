import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDashboardComponent } from './pages/company-dashboard/company-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [ { path: '', component: CompanyDashboardComponent }];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CompanyModule { }
