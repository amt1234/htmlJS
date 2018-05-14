import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  teamData;
  
  constructor(private dataservice: DataServiceService) {
    this.dataservice.getJSON().subscribe(result => { this.teamData = result['teaminfo']; });
  
    console.log(this.teamData);
   

  }

  ngOnInit() {
  }
}
