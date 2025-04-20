import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-adds',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './create-adds.component.html',
  styleUrl: './create-adds.component.css'
})
export class CreateAddsComponent {
  createAdForm: FormGroup;
  selectedFile: File | null = null;
  jsn:any
  constructor(private fb: FormBuilder, private server: CompanyService,private router:Router) {
    this.createAdForm = this.fb.group({
      serviceName: ['', Validators.required],
      serviceDetails: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      image: [null, Validators.required]
    });
  }
   onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
  onSubmit() {
      this.jsn= JSON.parse(localStorage.getItem("s_user"))
      console.log(this.jsn.id)
      const formData = new FormData();
      formData.append('serviceName', this.createAdForm.get('serviceName')?.value);
      formData.append('serviceDetails',this.createAdForm.get('serviceDetails')?.value);
      formData.append('price', this.createAdForm.get('price')?.value);
      formData.append('pic', this.selectedFile);
      formData.append('isReserved',"false")
      this.server.createAdds(this.jsn.id,formData).subscribe(
        res=>{
          this.router.navigateByUrl("allCompanyAdds")
        },
        err=>{
          alert(err)
        })
  }

}
