import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  let token=localStorage.getItem('token')
  if(token!==null){
      req=req.clone({
    setHeaders:{token}
  })
  }
 
  return next(req);
};
