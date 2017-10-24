import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { TaskServiceService } from './services/task-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskServiceService]
})
export class AppComponent implements OnInit{
  title = 'app works!';
  private myTasks: any = [];

  constructor(private service: TaskServiceService){}
	ngOnInit(){
		this.service.myCall()
		.then(res => { 
			console.log(res.json());
			this.myTasks = res.json();
			})
	}

}
