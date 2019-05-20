import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PgServiceService {

  constructor(private http : HttpClient) { }

  private pgInfoUrl = 'api/pgDetails'

  getPgInfo(): Observable<any>{
    return this.http.get<any>(this.pgInfoUrl);
  }

}
