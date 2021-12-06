//Class defining the Modules Component
//This class creates the page with the total list of modules
//The module information is retrieved from the DB
import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/models/module-model';
import { ModuleService } from 'src/app/services/module-service';


@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  modules?: Module[];
  showModule: any;

  constructor(private moduleService: ModuleService) { }

  ngOnInit(): void {
    this.retrieveModules();
  }

  // Retrieve all modules from database.
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
