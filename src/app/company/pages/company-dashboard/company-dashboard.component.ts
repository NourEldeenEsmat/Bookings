import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzRowDirective } from 'ng-zorro-antd/grid';
import { RouterLink } from '@angular/router';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'app-company-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule,NzRowDirective,RouterLink,NzListModule],
  templateUrl: './company-dashboard.component.html',
  styleUrl: './company-dashboard.component.css'
})
export class CompanyDashboardComponent {
  constructor(private server: CompanyService) { }
  ngOnInit() {
    this.getCompanyReservations()
  }
  data:any
  getCompanyReservations(){
    this.server.getReservations().subscribe(
      res=>{
        console.log(res)
        this.data=res
      },
      err=>{
        console.log(err)
      }
    )
  }
  companyAction(id:Number,state:any){
    this.server.companyAction(id,state).subscribe(
      res=>{
        console.log(res)
        this.getCompanyReservations()
      }
      ,err=>{
        console.log(err)
      }
    )
  }

}
