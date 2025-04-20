import { Routes } from '@angular/router';
import { SignupClientComponent } from './basics/components/signup-client/signup-client.component';
import { LoginComponent } from './basics/components/login/login.component';
import { SignupCompanyComponent } from './basics/components/signup-company/signup-company.component';
import { ClintDashboardComponent } from './clint/pages/clint-dashboard/clint-dashboard.component';
import { CompanyDashboardComponent } from './company/pages/company-dashboard/company-dashboard.component';
import { AddsComponent } from './clint/pages/adds/adds.component';
import { CreateAddsComponent } from './company/pages/create-adds/create-adds.component';
import { AllCompanyAddsComponent } from './company/pages/all-company-adds/all-company-adds.component';
import { ReviewAdComponent } from './clint/pages/review-ad/review-ad.component';
import { ReservationDetailsComponent } from './company/pages/reservation-details/reservation-details.component';
import { HomeComponent } from './basics/components/home/home.component';

export const routes: Routes = [
    {path:'',redirectTo:'home' ,pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'review/:adId',component:ReviewAdComponent},
    {path:'reviewR/:adId/:userId/:RId',component:ReservationDetailsComponent},
    {path:'createAdds',component:CreateAddsComponent},
    {path:'allCompanyAdds',component:AllCompanyAddsComponent},
    {path:'dashClient',component:ClintDashboardComponent},
    {path:'dashCompany',component:CompanyDashboardComponent},
    {path:'adds',component:AddsComponent},
    {path:'home',component:HomeComponent},
    {path:'registerCompany',component:SignupCompanyComponent},
    {path:'registerClient',component:SignupClientComponent},
    {path:'company',loadChildren:()=>import('./company/company.module').then(m=>m.CompanyModule)},
    {path:'client',loadChildren:()=>import('./clint/clint.module').then(m=>m.ClintModule)}
];
