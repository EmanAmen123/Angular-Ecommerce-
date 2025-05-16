import { HttpClient, httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   myheaders:any={token:localStorage.getItem('token')}
  
  constructor(private _HttpClient:HttpClient) { }

  addToCart(prodId:string):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/cart`,{
    productId: prodId
   } )
  }

  getCartProducts():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart`)
  }

  deleteProduct(prodId:string):Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart/${prodId}`)
  }

  updateProdCount(prodid:string,newcount:number):Observable<any>{
    return this._HttpClient.put(`${environment.baseUrl}/api/v1/cart/${prodid}`,{
    count: newcount
   },{
    headers:this.myheaders
   })
  }

  clear():Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart`)
  }
}
