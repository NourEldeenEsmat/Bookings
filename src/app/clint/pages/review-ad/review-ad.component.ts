import { CommonModule, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NzListModule } from 'ng-zorro-antd/list';
import { ClientServicesService } from '../../services/client-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-ad',
  standalone: true,
  imports: [CommonModule,FormsModule,NzListModule,],
  templateUrl: './review-ad.component.html',
  styleUrl: './review-ad.component.css'
})
export class ReviewAdComponent {
  // createReservationForm: FormGroup;
  constructor(private fb: FormBuilder,private server:ClientServicesService,private ar:ActivatedRoute){
    // this.createReservationForm = this.fb.group({
    //   userId: [null, Validators.required],
    //   adId: [null, Validators.required],
    //   companyId: [null, [Validators.required, Validators.min(0)]],
    //   state: [null, Validators.required],
    //   date: [null, Validators.required],
    // });
  }
  ngOnInit(){
    this.getAd(this.ar.snapshot.params["adId"])
  }
  item:any
  getAd(id:Number){
    this.server.getAdById(id).subscribe(
      res=>{
        this.item=res
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
  }
  uploudImg(image){
    return 'data:image/jpeg;base64,'+image
  }
  bookAd(){
    let jsn=JSON.parse(localStorage.getItem("s_user"))
    this.server.bookAd({
      userId:jsn.id,
      adId:this.item.id,
      companyId:this.item.userId,
      state:'WAITED',
      date: formatDate(new Date(), 'dd/MM/yyyy hh:mm a' , 'en').toString()
    }).subscribe(
      res=>{
        console.log(res)
        this.getAd(this.item.id)
      },
      err=>{
        console.log(err)
      }
    )
  }
}
