import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { NewUser } from '../new-user'
import { AddnewuserService } from '../addnewuser.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AddnewuserService]
})
export class SignupComponent implements OnInit {
  countries : string[] = ['', 'india', 'japan', 'singapore'];
  states : string[] = ['', 'coimbatore', 'chennai'];
  newUser = new NewUser(
    "", 
    "", 
    "", 
    "", 
    this.countries[0], 
    this.states[0], 
    "", 
    "", 
    );

  constructor(private addNewUserService : AddnewuserService) { }

  ngOnInit() {
    
  }
  onSubmit(){
    console.log(this.newUser);
    this.addNewUserService.addNewUser(this.newUser)
      .subscribe((user) => {
        console.log(user);
      });
  }
}
