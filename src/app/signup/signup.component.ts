import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { NewUser } from '../new-user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser = new NewUser(
    "akash", 
    "AkashCOOL", 
    "akash@gmail.com", 
    "password", 
    "india", 
    "tamilnadu", 
    "vinayaka layout", 
    "balu", 
    123456);

  constructor() { }

  ngOnInit() {
    
  }
  onSubmit(){
    console.log(this.newUser);
  }
}
