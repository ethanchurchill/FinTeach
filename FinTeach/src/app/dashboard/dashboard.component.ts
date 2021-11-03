import { Component, OnInit } from '@angular/core';
import { ContentField } from 'src/app/models/contentfield-model';
import { ContentFieldService } from 'src/app/services/contentfield-service';
import { Submodule } from 'src/app/models/submodule-model';
import { SubmoduleService } from 'src/app/services/submodule-service';
import { ModuleProgress } from 'src/app/models/moduleprogress-model';
import { ModuleProgressService } from 'src/app/services/moduleprogress-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contents?: ContentField[];
  submodules?: Submodule[];
  progressList?: ModuleProgress[];
  constructor(private contentFieldService: ContentFieldService,
    private moduleProgressService: ModuleProgressService,
    private submoduleService: SubmoduleService) { }

  ngOnInit(): void {
    this.retrieveContents();
  }
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
