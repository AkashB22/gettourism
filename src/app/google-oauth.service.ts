import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleOauthService {

  constructor(private http: HttpClient) { }

  private googleOauthUrl = '/auth/google';
  private httpOption = {
    headers : new HttpHeaders({ 'Content-Type' : 'text/plain'})
  }

  googleOauth(): Observable<any>{
   return this.http.get<any>(this.googleOauthUrl, this.httpOption);
  }
}
