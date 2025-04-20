import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'app-reservation-details',
  standalone: true,
  imports: [CommonModule, FormsModule, NzListModule,],
  templateUrl: './reservation-details.component.html',
  styleUrl: './reservation-details.component.css'
})
export class ReservationDetailsComponent {
  constructor(private ar: ActivatedRoute, private server: CompanyService) { }
  adId = this.ar.snapshot.params["adId"]
  userId = this.ar.snapshot.params["userId"]
  reservation: any
  RId = this.ar.snapshot.params["RId"]
  item: any
  user: any
  ngOnInit() {
    this.getAdById()
    this.getUserById()
    this.getReservationById()
  }
  getAdById() {
    this.server.getAdById(this.adId).subscribe(
      res => {
        console.log(res)
        this.item = res
      })
  }
  getUserById() {
    this.server.getUserById(this.userId).subscribe(
      res => {
        console.log(res)
        this.user = res
      }
    )
  }
  getReservationById() {
    this.server.getReservationById(this.RId).subscribe(
      res => {
      this.reservation=res
    },err=>{
      alert(err)
    })
  }
  uploudImg(image) {
    return 'data:image/jpeg;base64,' + image
  }
  companyAction(id: Number, state: any) {
    this.server.companyAction(id, state).subscribe(
      res => {
        console.log(res)
        this.getReservationById()
      }
      , err => {
        console.log(err)
      }
    )
  }
}
