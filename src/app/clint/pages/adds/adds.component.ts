import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NzListModule } from 'ng-zorro-antd/list';
import { ClientServicesService } from '../../services/client-services.service';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-adds',
  standalone: true,
  imports: [CommonModule,FormsModule,NzListModule,RouterLink],
  templateUrl: './adds.component.html',
  styleUrl: './adds.component.css'
})
export class AddsComponent {
data: any;
constructor(private server:ClientServicesService,private router:Router){}
  ngOnInit(): void {
    // this.loadData(1);
    this.getAddsList()
  }
getAddsList(){
  this.server.getAllAdds().subscribe(
    res=>{
      console.log(res)
      this.data=res
      localStorage.setItem("allAdds",JSON.stringify(this.data))
    },err=>{
      alert(err)
    }
  )
}
uploudImg(image){
  return 'data:image/jpeg;base64,'+image
}
}
