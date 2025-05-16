import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';

export const errorhandlingInterceptor: HttpInterceptorFn = (req, next) => {
  let _ToastrService=inject(ToastrService)
  return next(req).pipe(catchError((err)=>{
    console.log('interceptor err',err.error.message)
    _ToastrService.error(err.error.message, 'Error!', {
  closeButton: true,
});
      return throwError(()=>err)
  }));
};
