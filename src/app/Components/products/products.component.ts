import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../Core/Services/products/product.service';
import { Iproduct } from '../../Core/Interfaces/iproduct';
import { subscribeOn, Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CartService } from '../../Core/Services/Cart/cart.service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit ,OnDestroy {
 private readonly _ProductService=inject(ProductService)
 private readonly _CartService=inject(CartService)
 products!:Iproduct[]
 Subscription!:Subscription

 ngOnInit(): void {
     this.Subscription= this._ProductService.getAllProducts().subscribe({
      next:(res)=>{
           console.log(res)
           this.products=res.data
      },
      error:(err)=>{
           console.log(err)
      }
    })
 }

 addToCart(prodid:string){
     console.log('id',prodid)
    this._CartService.addToCart(prodid).subscribe({
     next:(res)=>{
          console.log("add to cart ",res.data)
     },error:(err)=>{
            console.log("add to cart error",err)
     }
    })
 }
 ngOnDestroy(): void {
    this.Subscription?.unsubscribe()
 }
}
