import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-signup-company',
  standalone: true,
  imports: [NzFormModule,NzButtonModule,RouterLink,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './signup-company.component.html',
  styleUrl: './signup-company.component.css'
})
export class SignupCompanyComponent {
  validateForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private auth:AuthService,
    private notifcations:NzNotificationService,
    private router:Router
  ){}
  ngOnInit(){
    this.validateForm = this.fb.group(
    {
      email:[null,[Validators.email,Validators.required]],
      name:[null,[Validators.required]],
      lastName:[null,[Validators.required]],
      phone:[null,[Validators.required]],
      password:[null],
      checkPassword:[null,[Validators.required]], 
    }
    )
  }
  signupCompany(){
    this.auth.registerCompany(this.validateForm.value).subscribe(
    res=>{
      this.notifcations.success("Success",'Signup Successful',{nzDuration:5000})
      this.router.navigateByUrl('/login')
    },
    err=>{
      this.notifcations.error('Error',err.error,{nzDuration:5000})
    }
  )
  }
}
