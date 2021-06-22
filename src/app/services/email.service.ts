import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url: string = "https://prod-89.eastus.logic.azure.com:443/workflows/0ddda4613c4b4f17a986806c4f5228f4/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=T84bXVfYhGc6llKpaKYn44JAEfPOVolKtwTOUPmG1eA";

  constructor(private http: HttpClient) { }

  sendPersonalEMail(data: object): Observable<any> {
    return this.http.post<any>(this.url, data, httpOptions);
  } 


  sendEmail(data: object): Observable<any> {
    return this.http.post<any>(this.url, data, httpOptions);
  }

}
