import { Injectable } from '@angular/core';
const TOKEN = "s_token"
const USER = "s_user"
@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }
  public saveToken(token:string){
    window.localStorage.removeItem(TOKEN)
    window.localStorage.setItem(TOKEN,token)
  }
  static getToken():String{
   return window.localStorage.getItem(TOKEN)
  }
  
  public saveUser(user:string){
    window.localStorage.removeItem(USER)
    window.localStorage.setItem(USER,JSON.stringify(user))
  }

  static getUser():any{
    return JSON.parse(localStorage.getItem(USER))
   }
   static getUserId(){
    const user =this.getUser()
    if(user!=null){
      return user.userId
    }
   }
   static getUserRole(){
    const user =this.getUser()
    if(user!=null){
      return user.role
    }
   }
   static isClientLoggedIn():boolean{
    if(this.getToken===null){
      return false;
    }else{
      const role:String=this.getUserRole()
      return role=='CLIENT'
    }
   }
   static isCompanyLoggedIn():boolean{
    if(this.getToken===null){
      return false;
    }else{
      const role:String=this.getUserRole()
      return role=='COMPANY'
    }
   }
  static logout(){
    window.localStorage.removeItem(TOKEN)
    window.localStorage.removeItem(USER)
  }
}
