import { Component } from '@angular/core';
import { ClientServicesService } from '../../services/client-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzRowDirective } from 'ng-zorro-antd/grid';
import { RouterLink } from '@angular/router';
import { NzListComponent, NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'app-clint-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule,NzRowDirective,RouterLink,NzListModule],
  templateUrl: './clint-dashboard.component.html',
  styleUrl: './clint-dashboard.component.css'
})
export class ClintDashboardComponent {
  constructor(private server: ClientServicesService) { }
  ngOnInit() {
    this.getUserReservations()
  }
  data:any
  ad:any
  getUserReservations(){
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
  deleteReservation(id:Number){
    this.server.deleteReservation(id).subscribe(
      res=>{
        this.getUserReservations()
        alert("deleted")
      }
      ,err=>{
        alert(err)
      }
    )
  }
}
