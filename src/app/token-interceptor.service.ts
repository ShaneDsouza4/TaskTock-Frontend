import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    let tokenizedReq
    if (localStorage.getItem('token')) { //Check token in localstorage
      tokenizedReq = req.clone({ //CLone and set the Bearer Token
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      return next.handle(tokenizedReq)
    } else {
      return next.handle(req)
    }


  }
}
