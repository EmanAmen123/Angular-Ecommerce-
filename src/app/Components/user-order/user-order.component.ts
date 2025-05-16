import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../Core/Services/Order/orders.service';

@Component({
  selector: 'app-user-order',
  imports: [ReactiveFormsModule],
  templateUrl: './user-order.component.html',
  styleUrl: './user-order.component.scss'
})
export class UserOrderComponent implements OnInit {
  private readonly _ActivatedRoute=inject(ActivatedRoute)
  private readonly _FormBuilder=inject(FormBuilder)
  private readonly _OrdersService=inject(OrdersService)

  cartID:string|null=""

  checkout:FormGroup=this._FormBuilder.group({
    details:[null,Validators.required],
    phone:[null,Validators.required],
    city:[null,Validators.required],
  })
  
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=> {
        console.log(params.get('cartId'))
        this.cartID=params.get('cartId')
      },error:(err)=>console.log(err)
    })
  }
  submitForm(){
    console.log(this.checkout.value)
    if(this.checkout.valid){
    this._OrdersService.checkOut(this.cartID,this.checkout.value).subscribe({
      next:(res)=>{
        console.log(res)
        if(res.status==="success"){
          window.open(res.session.url,"_self")
        }
      },error:(err)=>{
        console.log(err)
      }
    })
     
    }
  }
}
