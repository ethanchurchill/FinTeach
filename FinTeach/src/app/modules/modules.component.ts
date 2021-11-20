import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/models/module-model';
import { ModuleService } from 'src/app/services/module-service';


@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  dummyModules?: Module[]; //Dummy data for now
  modules?: Module[];
  showModule: any;
  constructor(private moduleService: ModuleService) { }
  ngOnInit(): void {
    this.initializeDummyModules();
    this.retrieveModules();
  }
  initializeDummyModules(): void {
    const dummy1 = new Module();
    dummy1.name = "Stocks";
    dummy1.description = "This module covers stocks. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    dummy1.img_ref = "/assets/stocks-folder.png"
    const dummy2 = new Module();
    dummy2.name = "Budgeting";
    dummy2.description = "This module covers budgeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est; laborum";
    dummy2.img_ref = "/assets/budgeting-folder.png";
    const dummy3 = new Module();
    dummy3.name = "Credit";
    dummy3.description = "This module covers credit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    dummy3.img_ref = "/assets/credit-folder.png";

    this.dummyModules = [dummy1, dummy2, dummy3]
  }
  retrieveModules(): void {
    this.moduleService.getAll()
      .subscribe(
        data => {
          this.modules = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
