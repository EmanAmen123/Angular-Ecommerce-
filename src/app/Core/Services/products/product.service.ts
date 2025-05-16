import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../../Interfaces/iproduct';
import {environment} from '../../Environment'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
   
  constructor(private _HttpClient:HttpClient) { }

  getAllProducts():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/products`)
  }
}
