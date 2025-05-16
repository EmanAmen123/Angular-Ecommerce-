import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient:HttpClient) { }

  getAllCategories():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories`)
  }
}
