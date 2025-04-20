import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const basicUrl="http://localhost:8080/"
@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {

  constructor(private http:HttpClient) { }
  getAllAdds(){
   return this.http.get(basicUrl+"adds")
  }
  getAdById(id:Number){
   return this.http.get(basicUrl+"getAd/"+id)
  }
  getReservations(){
    let jsn = JSON.parse(localStorage.getItem("s_user"));
    let id = jsn.id
    return this.http.get(basicUrl+"getReservationsByClientId/"+id)
  }
  bookAd(body:any){
    return this.http.post(basicUrl+"bookAd",body)
  }
  deleteReservation(id:Number){
   return this.http.delete(basicUrl+"deleteReservationById/"+id)
  }
  getReservationById(id:Number){
    return this.http.get(basicUrl+"getReservation/"+id)
  }
}
