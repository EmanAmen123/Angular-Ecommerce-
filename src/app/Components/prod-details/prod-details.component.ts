import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-details',
  imports: [],
  templateUrl: './prod-details.component.html',
  styleUrl: './prod-details.component.scss'
})
export class ProdDetailsComponent implements OnInit{
  private readonly _ActivatedRoute=inject(ActivatedRoute)
  productId:string=""
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.productId!=params.get('prodID')
      }
    })
  }
}
