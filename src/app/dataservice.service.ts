import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  private userSource = new BehaviorSubject('hello user');
  currentUser = this.userSource.asObservable();

  changeUser(user:string){
     this.userSource.next(user);
  }
}
