import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, observeOn } from 'rxjs';
const basicUrl="http://localhost:8080/"
export const AuthHeader = 'authorization'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  registerClient(clientRegisterationForm:any):Observable<any>{
   return this.http.post(basicUrl+"client/signup",clientRegisterationForm)
  }
  registerCompany(companyRegisterationForm:any):Observable<any>{
   return this.http.post(basicUrl+"company/signup",companyRegisterationForm)
  } 
  login(username:String,password:String){
   return this.http.post(basicUrl+"authenticate",{username,password},{observe:'response'})
      .pipe(
        map((res:HttpResponse<any>)=>{
        // console.log(res.body)
        // const tokenLength = res.headers.get(AuthHeader)?.length
        // const bearerToken = res.headers.get(AuthHeader)?.substring(7,tokenLength)
        // console.log(bearerToken)
        return res
      }))
  }
}
