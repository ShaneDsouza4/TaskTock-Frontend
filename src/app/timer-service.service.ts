import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TimerServiceService {

  constructor(private http: HttpClient) { }

  saveEntries(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/task/save`, data);
  }

  fetchTaskbook(): Observable<any> {
    return this.http.get(`${baseUrl}/api/task/taskbook`);
  }
}
