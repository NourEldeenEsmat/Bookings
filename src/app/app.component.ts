import { Component, NgModule } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule, NgControl } from '@angular/forms';
import { UserStorageService } from './basics/services/storage/user-storage.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NzButtonModule,NzLayoutModule,NzGridModule,FormsModule,CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router:Router){}

  title = 'ServiceBookingSystemWeb';
  isClientLoggedIn:boolean=UserStorageService.isClientLoggedIn()
  isCompanyLoggedIn:boolean=UserStorageService.isCompanyLoggedIn()
  ngOnInit(){
    this.router.events.subscribe(
      event=>{
        this.isClientLoggedIn=UserStorageService.isClientLoggedIn()
        this.isCompanyLoggedIn=UserStorageService.isCompanyLoggedIn()
      }
    )
  }
  logout(){
    UserStorageService.logout()
    this.router.navigateByUrl('login')
  }
}
