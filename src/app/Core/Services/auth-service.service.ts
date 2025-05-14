import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../Environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
   userData:any=null
  constructor(private _HttpClient:HttpClient,private _router:Router) { }

  register(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signup`,data)
  }
  Login(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signin`,data)
  }
  
  saveUserData(){
    if(localStorage.getItem('token')!==null){
     this.userData= jwtDecode(localStorage.getItem('token')!)
    }
  }

  logout():void{
    localStorage.removeItem('token')
    this.userData=null
    this._router.navigate(['/login'])
  }
}
