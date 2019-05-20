import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageUrl:String;
  constructor(private domSanitizer : DomSanitizer, location:Location) {
    console.log(location.path());
  }

  ngOnInit() {
    this.imageUrl = '/assets/image/booknow.png';
  }

}
