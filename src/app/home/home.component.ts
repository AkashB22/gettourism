import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AddnewuserService} from '../addnewuser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageUrl:String;
  flag:boolean;
  constructor(private domSanitizer : DomSanitizer, private location : Location, private activatedRoute : ActivatedRoute, private addNewUserService : AddnewuserService, private router : Router) {
    //console.log(location.path());

  }
  username: any;
  
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
      (data) => {console.log(data)},
      (error) => {console.log(error); this.router.navigate(['login'])}
    )
  }
}
