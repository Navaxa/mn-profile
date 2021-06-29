import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment  } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  sendPersonalEMail(data: object): Observable<any> {
    return this.http.post<any>(this.url, data, httpOptions);
  } 


  sendEmail(data: object): Observable<any> {
    return this.http.post<any>(this.url, data, httpOptions);
  }

}
