import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ClientServicesService } from '../../../clint/services/client-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,NzListModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data: any;
  constructor(private server:ClientServicesService){}
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
