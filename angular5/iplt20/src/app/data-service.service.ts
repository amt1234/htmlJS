import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class DataServiceService {

  teamData;
  constructor(private http: Http) {
  }

  public getJSON():Observable<any[]>{
    return this.http.get("./assets/JSON/newTeamInfo.json")
      // return this.http.get("./assets/JSON/newPlayerInfo.json")
      .map(response => response.json())
  }
  public getPlayer():Observable<any[]>{
    return this.http.get("./assets/JSON/newPlayerInfo.json")
      .map(response => response.json())
  }

  public getData(): any {
    return this.teamData;
  }
}


