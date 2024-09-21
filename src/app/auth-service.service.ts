import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/user/login`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/user/register`, data)
  }

  isLoggedIn() {
    console.log(localStorage.getItem('token'))
    return (localStorage.getItem('token')) ? true : false
  }

}
