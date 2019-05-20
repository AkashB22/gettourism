import { Component, OnInit } from '@angular/core';
import { PgServiceService } from '../pg-service.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-pg-details',
  templateUrl: './pg-details.component.html',
  styleUrls: ['./pg-details.component.css']
})
export class PgDetailsComponent implements OnInit {
  pgDetail:any;

  constructor(private http : HttpClient, private pgService : PgServiceService) { }

  ngOnInit() {
    this.getPgDetails();

  }

  getPgDetails(){
    this.pgService.getPgInfo()
      .subscribe((pgInfo) => {
        console.log(pgInfo);
        this.loadData(pgInfo);
        
      });
    }

  loadData(pgInfo){
    pgInfo.floors=[];
      for(var i=0;i<pgInfo.numberOfFloors;i++){
        pgInfo.floors.push(i+1);
      }
      pgInfo.roomsEachFloor=[];
      for(var i=0;i<pgInfo.roomsPerFloor;i++){
        pgInfo.roomsEachFloor.push(i+1);
      }
      return this.pgDetail = pgInfo;
  }
}
