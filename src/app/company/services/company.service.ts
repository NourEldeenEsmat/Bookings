import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const basicUrl="http://localhost:8080/"
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }
  createAdds(id:number,body:any){
    return this.http.post(basicUrl+"create_adds/"+id,body)
  }
  getCompanyAdds(id:Number){
    return this.http.get(basicUrl+"getAddsByCompanyId/"+id)
   }
  deleteAdd(id:Number){
    return this.http.delete(basicUrl+"deleteAdd/"+id)
   }
  getReservations(){
    let jsn = JSON.parse(localStorage.getItem("s_user"));
    let id = jsn.id
    return this.http.get(basicUrl+"getReservationsByCompanyId/"+id)
   }
  companyAction(id:Number,state:any){
    return this.http.post(basicUrl+"company_action/"+id,state)
  }
  getAdById(id:Number){
    return this.http.get(basicUrl+"getAd/"+id)
  }
  getUserById(id:Number){
    return this.http.get(basicUrl+"getUserById/"+id)
  }
  getReservationById(id:Number){
    return this.http.get(basicUrl+"getReservation/"+id)
  }
}
