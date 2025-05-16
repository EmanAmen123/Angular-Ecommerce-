import { logedGuard } from './../../Core/Guards/Logged/loged.guard';
import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../Core/Services/Cart/cart.service';
import { IcartDetails } from '../../Core/Interfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  
  cartDetails:IcartDetails ={} as IcartDetails
  disabledminus:boolean=false
  private readonly _CartService=inject(CartService)

  ngOnInit(): void {
    this._CartService.getCartProducts().subscribe({
      next:(res)=>{
         console.log('cart response',res)
         this.cartDetails=res.data
      },error:(err)=>{
        console.log(err)
      }
    })
  }

  deleteProduct(id:string){
    this._CartService.deleteProduct(id).subscribe({
      next:(res)=>{
        this.cartDetails=res.data
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }

  updateCount(id:string,newCount:number){
   
         this._CartService.updateProdCount(id,newCount).subscribe({
      next:(res)=>{
        console.log(res)
        this.cartDetails=res.data
         if(newCount===1){
      this.disabledminus=true
       }
      },error:(err)=>{
        console.log(err)
      }
    })
    
   
  }

  clearCart(){
    this._CartService.clear().subscribe({
      next:(res)=>{
        console.log(res)
        this.cartDetails={} as IcartDetails
      },error:(err)=>{
        console.log(err)
      }
    })
  }
} 
