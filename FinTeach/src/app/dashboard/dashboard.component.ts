//Class defining the Dashboard Component
//This class retrieves module data for the user from the DB
//It then populates the module galleries with the right modules
import { Component, OnInit } from '@angular/core';
import { ModuleProgress } from 'src/app/models/moduleprogress-model';
import { ModuleProgressService } from 'src/app/services/moduleprogress-service';
import { Module } from 'src/app/models/module-model';
import { ModuleService } from 'src/app/services/module-service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  completeList?: ModuleProgress[];
  progressList?: ModuleProgress[];
  user_id?: any;

  //Initializes the backend retrieval services in the constructor
  constructor(private moduleService: ModuleService,
    private moduleProgressService: ModuleProgressService) { }
  //Runs on page initiliazation
  ngOnInit(): void {
    this.user_id = JSON.parse(localStorage.getItem('currentUser') || '{}').id;

    if (this.user_id) {
      //Initializes the modules and gets content from the DB
      this.retrieveContents(this.user_id);
    } else {
      console.log("Please log in to access your dashboard");
    }
  }

  //First step at retrieving contents from the database
  //This part needs some work
  retrieveContents(user_id:any): void {
    this.moduleProgressService.getFromUserId(user_id)
    .subscribe(
      data => {
        this.progressList = [];
        this.completeList = [];
        data.forEach( (prog) => {
            this.moduleService.getFromId(prog.module_id)
            .subscribe(
              data => {
                if (prog.module_completed == true) {
                  if (this.completeList) {this.completeList.push(data[0]);}
                } else {
                  if (this.progressList) {this.progressList.push(data[0]);}
                }
                console.log(this.completeList, this.progressList);
              },
              error => {
                console.log(error);
              });
        });
      },
      error => {
        console.log(error);
      });
  }

}
