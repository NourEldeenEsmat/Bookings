import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterConfigOptions, RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AuthHeader, AuthService } from '../../services/auth/auth.service';
import { UserStorageService } from '../../services/storage/user-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzFormModule,NzButtonModule,RouterLink,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    constructor(private router:Router,private fb: NonNullableFormBuilder,private serve:AuthService,private storage:UserStorageService) {}
    validateForm: FormGroup<{
      userName: FormControl<string>;
      password: FormControl<string>;
      // remember: FormControl<boolean>;
    }> = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      // remember: [true]
    });
  
    loginForm(): void {
      if (this.validateForm.valid) {
        console.log('submit', this.validateForm.value);
        this.serve.login(this.validateForm.get(['userName'])?.value,this.validateForm.get(['password'])?.value)
        .subscribe(
          res=>{
            console.log(res.body)
            this.storage.saveUser(res.body)
            if(res.body.role=="CLIENT")
            this.router.navigateByUrl("client")
            else
            this.router.navigateByUrl("company")
            // const TOKEN_LENGTH=res.headers.get(AuthHeader).length
            // const bareerToken=res.headers.get(AuthHeader).substring(7,TOKEN_LENGTH)
            // this.storage.saveToken(bareerToken)
          },
          err=>{
            alert(err)
          }
        )
      } else {
        Object.values(this.validateForm.controls).forEach(control => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
        });
      }
    }
}
