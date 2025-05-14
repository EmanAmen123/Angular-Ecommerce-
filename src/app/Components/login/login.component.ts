import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../../Core/Services/auth-service.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly _FormBuilder=inject(FormBuilder)
  private readonly _AuthServiceService=inject(AuthServiceService)
  private readonly _Router=inject(Router)
  errormsg:string=""
  isLoading:boolean=false
  LoginForm:FormGroup=this._FormBuilder.group({
    
     email:['',[Validators.required,Validators.email]],
     password:['',[Validators.required]],
  })

 

  handleSubmit(){
    this.isLoading=true
    if(this.LoginForm.valid){
        this._AuthServiceService.Login(this.LoginForm.value).subscribe({
          next:(res)=>{
            this.isLoading=false
            console.log('Login response',res)
            if(res.message==="success"){
             localStorage.setItem('token',res.token)
             this._AuthServiceService.saveUserData()
             this._Router.navigate(['/home'])
            }
          }, 
          error:(err:HttpErrorResponse)=>{
            this.isLoading=false
              
              console.log('Login error : ',err)
              this.errormsg= (err.error.errors?.msg )? err.error.errors.msg : err.error.message;
              // console.log(this.errormsg)
              
          }
        })
    }else{
      this.LoginForm.markAllAsTouched()
      console.log(this.LoginForm.value)
            this.isLoading=false

    }
  }
}
