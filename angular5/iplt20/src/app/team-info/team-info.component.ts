import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
playerData;
  constructor(private dataservice: DataServiceService) { 
      this.dataservice.getPlayer().subscribe(data => { this.playerData = data['Playersinfo']; });
      console.log(this.playerData);    
  }
  ngOnInit() {
  }

}
