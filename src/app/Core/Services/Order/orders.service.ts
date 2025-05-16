import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  myHeadrs:any={token:localStorage.getItem('token')}
  constructor(private _HttpClient:HttpClient) { }

  checkOut(cartID:string|null,data:{deails:string,phone:number,city:string}):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/checkout-session/${cartID}?url=http://localhost:4200`,{
    shippingAddress:data
})
  }
}
