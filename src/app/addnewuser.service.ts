import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { NewUser } from './new-user';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AddnewuserService {

  constructor(private http:HttpClient) { }
  private url = '/api/addNewUser'
  private httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  };

  addNewUser(user:NewUser): Observable<any>{
    return this.http.post<NewUser>(this.url, user, this.httpOptions)
      .pipe(map((response: any) => response.json()));
  }
}
