import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/models/module-model';
import { ModuleService } from 'src/app/services/module-service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  closeResult = '';
  modules?: Module[];
  constructor(private moduleService: ModuleService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.retrieveModules();
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
