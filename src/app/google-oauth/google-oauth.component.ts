import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-google-oauth',
  templateUrl: './google-oauth.component.html',
  styleUrls: ['./google-oauth.component.css']
})
export class GoogleOauthComponent implements OnInit {

  constructor(private location : Location) { }

  ngOnInit() {
    this.location.go('/auth/google');
    window.location.reload();
  }

}
