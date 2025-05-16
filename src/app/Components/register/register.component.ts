import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../../Core/Services/auth-service.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy {
  private readonly _FormBuilder=inject(FormBuilder)
  private readonly _AuthServiceService=inject(AuthServiceService)
  private readonly _Router=inject(Router)
  errormsg:string=""
  isLoading:boolean=false
   Subscription!:Subscription
  
  registerForm:FormGroup=this._FormBuilder.group({
     name:['',[Validators.required,Validators.minLength(3)]],
     email:['',[Validators.required,Validators.email]],
     password:['',[Validators.required]],
     rePassword:[''],
     phone:['',[Validators.required]]
  },this.confirmPass)

  confirmPass(fg:AbstractControl){
    if(fg.get('password')?.value===fg.get('rePassword')?.value){
        return null
    }else{
      return {misMatch:true}
    }
  }

  handleSubmit(){
    this.isLoading=true
    if(this.registerForm.valid){
       this.Subscription= this._AuthServiceService.register(this.registerForm.value).subscribe({
          next:(res)=>{
            this.isLoading=false
            console.log('register response',res)
            if(res.message==="success"){
             this._Router.navigate(['/login'])
            }
          }, 
          error:(err:HttpErrorResponse)=>{
            this.isLoading=false
              
              console.log('register error : ',err)
              this.errormsg= (err.error.errors?.msg )? err.error.errors.msg : err.error.message;
              // console.log(this.errormsg)
              
          }
        })
    }else{
      this.registerForm.markAllAsTouched()
      console.log(this.registerForm.value)
            this.isLoading=false

    }
  }

  ngOnDestroy(): void {
    this.Subscription?.unsubscribe()
  }
}

