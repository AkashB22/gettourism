import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AddnewuserService} from '../addnewuser.service';
import { EmailService } from '../email.service';
import { DataserviceService } from '../dataservice.service';
import { EnquiryForm } from '../enquiry-form';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  success: any;
  constructor(private domSanitizer : DomSanitizer, private location : Location, private activatedRoute : ActivatedRoute, private addNewUserService : AddnewuserService, private router : Router, private emailService : EmailService, dataService : DataserviceService) {}

  imageUrl:String;
  flag:boolean;
  error: string;
  formError: boolean;
  emailId : string;
  newEnquiryForm = new EnquiryForm(
    "", "", "", "", "", "", "", ""
  );
  countries : string[] = ['india', 'japan', 'singapore'];
  states : string[] = ['coimbatore', 'chennai'];
  members : string[] = ['1', '2', '3', '4', '5'];
  hotelCategories : string[] = ['5 Star', '4 Star', '3 Star'];
  mealPlans : string[] = ['Breakfast only', 'Breakfast & Lunch', 'Breakfast, Lunch & dinner'];

  ngOnInit() {
    this.isValidUser();

    this.imageUrl = '/assets/image/booknow.png';
    this.flag = false;
    setTimeout(()=>{
      this.flag = true;
    },3000);
  }

  isValidUser(){
    this.addNewUserService.validateUser().subscribe(
      (data) => {
        console.log(data);
        this.emailId = data.email;
        this.newEnquiryForm.email = this.emailId;
      },
      (error) => {console.log(error); this.router.navigate(['login'])}
    )
  }

  onSubmit(){
    console.log(this.newEnquiryForm);
      this.emailService.sendEmailApi(this.newEnquiryForm).subscribe(
      data=>{
        console.log(data); 
        if(data.success){
          this.success= data.sucess;
        } else{
          this.error= data.error;
        }
      },
      error=> {
        console.log(error);
        this.formError = true;
        this.error = error.error.message;
      });
  }
}
