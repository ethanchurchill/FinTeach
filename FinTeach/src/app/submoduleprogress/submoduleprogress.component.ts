import { Component, OnInit, Input } from '@angular/core';
import { SubmoduleService } from 'src/app/services/submodule-service';


@Component({
  selector: 'app-submodule-progress',
  templateUrl: './submoduleprogress.component.html',
  styleUrls: ['./submoduleprogress.component.css']
})
export class SubmoduleprogressComponent implements OnInit {

  @Input() module_id?: any;
  @Input() current_submodule?: any;
  submodules?: any;

  constructor(private submoduleService: SubmoduleService) { }

  ngOnInit(): void {
    this.loadSubmodule(this.module_id);
  }

  loadSubmodule(module_id: any): void {
    this.submoduleService.getFromModuleId(module_id) //get module's submodules
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
