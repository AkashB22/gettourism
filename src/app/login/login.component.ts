import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AddnewuserService } from '../addnewuser.service';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup = new FormGroup({
    email : new FormControl(null, [Validators.email, Validators.required]),
    password : new FormControl(null, Validators.required)
  });
  constructor(private addUserService : AddnewuserService, private router: Router, private currentUserService : DataserviceService) { }
  
  formError: boolean = false;
  error: string;
  user: string;
  
  ngOnInit() {
  }

  loginSubmit(){
    if(!this.loginForm.valid){
      console.log("invalid");
      this.error = "Invalid email id";
      this.formError = true;
      return;
    } else{
      console.log(JSON.stringify(this.loginForm.value));
      this.addUserService.loginUserSubmit(this.loginForm.value).subscribe(
        data=>{
          console.log(data); 
          this.currentUserService.changeUser(data.user);
          this.router.navigate(['home']);
        },
        error=> {
          console.log(error);
          this.formError = true;
          this.error = error.error.message;
        }

      );
    }
  }

  signUp(){
    this.router.navigate(['signup']);
  }
}
