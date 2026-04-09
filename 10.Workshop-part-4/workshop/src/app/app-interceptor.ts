import { HttpInterceptorFn } from '@angular/common/http';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  const API = '/api';
  if(req.url.startsWith(API)){
    req = req.clone({
      url: req.url.replace(API, 'http://localhost:3000/api'),
    });
  }
  console.log(req);
  
  return next(req);
};
