import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let token = "AAAAAAAAAAAAAAAAAAAAAFBMiwEAAAAAb88HmF5A9wXbRuIuEnc7fFfexTA%3Dw8WWcNAWpWTrR1ii8QM9fgpuVMXtP7z9iimMjqsqnl1ElEjner";
    let jwttoken = req.clone({
      setHeaders:{
        Authorization: 'bearer '+token
      }
    })
    return next.handle(jwttoken);

  }
}
