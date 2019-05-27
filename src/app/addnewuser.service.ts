import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root'
})
export class AddnewuserService {
  

  constructor(private http:HttpClient) { }
  private url = '/api/user';
  private token = '/api/login';
  private userValidurl = '/api/home';
  private logoutUrl = '/api/logout';
  private httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
    
  };

  addNewUser(user:NewUser): Observable<any>{
    return this.http.post<any>(this.url, user, this.httpOptions)
  }
  private httpOptions1 = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'}), withCredentials:true
    
  };

  loginUserSubmit(body): Observable<any>{
    return this.http.post(this.token, body, this.httpOptions1)
  }

  
  validateUser() : Observable<any>{
    return this.http.get<any>(this.userValidurl, this.httpOptions1);
  }

  logout() : Observable<any>{
    return this.http.get<any>(this.logoutUrl, this.httpOptions1)
  }
}
