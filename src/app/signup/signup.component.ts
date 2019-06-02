import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NewUser } from '../new-user';
import { AddnewuserService } from '../addnewuser.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AddnewuserService]
})
export class SignupComponent implements OnInit {
  countries : string[] = ['india', 'japan', 'singapore'];
  states : string[] = ['coimbatore', 'chennai'];
  newUser = new NewUser(
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    );
    formError: boolean = false;
    error: String;
    windowScrolled: Boolean;

  constructor(private addNewUserService : AddnewuserService, private router : Router) { }

  ngOnInit() {
    
  }
  onSubmit(){
    console.log(this.newUser);
    this.addNewUserService.addNewUser(this.newUser)
      .subscribe((user) => {
        this.error = user.error;
        if(this.error){
          this.formError = true;
          console.log(this.error);
        } else{
          this.formError = false;
          
          this.router.navigate(['login']);
        }
      });
  }

  scrollToTop(){
    window.scrollTo(0, 0);
  }
}
