//Class defining the Dashboard Component
//This class retrieves module data for the user from the DB
//It then populates the module galleries with the right modules
import { Component, OnInit } from '@angular/core';
import { ContentField } from 'src/app/models/contentfield-model';
import { ContentFieldService } from 'src/app/services/contentfield-service';
import { Submodule } from 'src/app/models/submodule-model';
import { SubmoduleService } from 'src/app/services/submodule-service';
import { ModuleProgress } from 'src/app/models/moduleprogress-model';
import { ModuleProgressService } from 'src/app/services/moduleprogress-service';
import { Module } from 'src/app/models/module-model';  

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //Hardcoded module list using dummy data
  dummyModules1?: Module[]; //Dummy data for now
  dummyModules2?: Module[];
  dummyModules3?: Module[];

  contents?: ContentField[];
  submodules?: Submodule[];
  progressList?: ModuleProgress[];
  //Initializes the backend retrieval services in the constructor
  constructor(private contentFieldService: ContentFieldService,
    private moduleProgressService: ModuleProgressService,
    private submoduleService: SubmoduleService) { }
  //Runs on page initiliazation
  ngOnInit(): void {
    //Initializes the modules and gets content from the DB
    this.initializeDummyModules();
    this.retrieveContents();
  }
  //Populate dummy data into the module
  //This will be replaced with database calls
  initializeDummyModules(): void {
    const dummy1 = new Module();
    dummy1.name = "Stocks"
    dummy1.description = "This module covers stocks. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    dummy1.img_ref = "/assets/stocks-folder.png"
    const dummy2 = new Module();
    dummy2.name = "Budgeting"
    dummy2.description = "This module covers budgeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    dummy2.img_ref = "/assets/budgeting-folder.png"
    const dummy3 = new Module();
    dummy3.name = "Credit"
    dummy3.description = "This module covers credit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    dummy3.img_ref = "/assets/credit-folder.png"

    this.dummyModules1 = [dummy1, dummy2, dummy3]
    this.dummyModules2 = [dummy2, dummy3, dummy1]
    this.dummyModules3 = [dummy3, dummy1, dummy2]
  }
  //First step at retrieving contents from the database
  //This part needs some work
  retrieveContents(): void {
    this.contentFieldService.getAll()
      .subscribe(
        data => {
          this.contents = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    this.moduleProgressService.getAll()
    .subscribe(
      data => {
        this.progressList = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
    this.submoduleService.getAll()
    .subscribe(
      data => {
        this.submodules = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
