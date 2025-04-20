import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-client',
  standalone: true,
  imports: [NzFormModule,NzButtonModule,RouterLink,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './signup-client.component.html',
  styleUrl: './signup-client.component.css'
})
export class SignupClientComponent {
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
  signupClient(){
    this.auth.registerClient(this.validateForm.value).subscribe(
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
