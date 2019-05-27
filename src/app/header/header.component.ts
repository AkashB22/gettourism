import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddnewuserService } from '../addnewuser.service';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  validUser : boolean = false;
  username: string;
  constructor(private activatedRoute : ActivatedRoute, private addNewUserService : AddnewuserService, private router : Router, private currentUserService : DataserviceService) { }

  ngOnInit() {
    this.isValidUser();
    this.currentUserService.currentUser.subscribe((user) =>
          {
            this.username = user;
            this.validUser = true;
          });
  }

  
  isValidUser(){
    this.addNewUserService.validateUser().subscribe(
      (data) => {console.log(data); this.username=data.username; this.validUser = true;},
      (error) => {console.log(error); this.username=''; this.validUser = false;}
    )
  }

  logoutUser(){
    this.addNewUserService.logout().subscribe(
      (data) => {console.log(data); this.router.navigate(['login']); this.validUser = false;},
      (error) => {console.log(error)}
    )
  }
}
