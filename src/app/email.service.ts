import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  private emailUrl = '/api/email';
  private httpOption = {
    headers : new HttpHeaders({ 'Content-type' : 'application/json'})
  }

  sendEmailApi(emailData): Observable<any>{
   return this.http.post(this.emailUrl, emailData, this.httpOption);
  }
}
