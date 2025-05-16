import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryService } from '../../Core/Services/Categories/category.service';
import { Icategory } from '../../Core/Interfaces/icategory';
import { ProductsComponent } from "../products/products.component";
import { ProductService } from '../../Core/Services/products/product.service';
import { Iproduct } from '../../Core/Interfaces/iproduct';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
   private readonly _CategoryService=inject(CategoryService)
   allCategories!:Icategory[]
    private readonly _ProductService=inject(ProductService)
    products!:Iproduct[]
    Subscription!:Subscription

   customOptionsMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: true
  }
   customOptionsCateg: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  ngOnInit(): void {
       this._CategoryService.getAllCategories().subscribe({
        next:(res)=>{
          this.allCategories=res.data
        },
        error:(err)=>{
           console.log(err)
        }
       })

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
  
  ngOnDestroy(): void {
    
  }
}
