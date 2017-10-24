import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class TaskServiceService {

  constructor(private http: Http) {}
  myCall(){
  	return this.http.get("https://proplanner-staging.herokuapp.com/api/tasks/per_time?session_key=6Oi-UjlePF0-EduG1RY3N8JwSi4SPy6Qrn_01jyZ_tE&start_at=2017-10-16&end_at=2017-10-22&sector_id=1061")
  .toPromise()
  }
}


