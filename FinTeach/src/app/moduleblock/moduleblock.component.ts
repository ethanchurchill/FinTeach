//Class defining the ModuleBlock Component
//This component shows the image and name of modules
//This component is utilized in the gallery as well as the modules page
import { Component, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector:'moduleblock',
    templateUrl:'./moduleblock.component.html',
    styleUrls:['./moduleblock.component.css']
})

export class ModuleBlock {
    //Getting the name description and image reference for the module
    @Input() name?: string;
    @Input() description?: string;
    @Input() img_ref?: string;
    @Input() module_id?: Number;

    constructor(private modalService: NgbModal) { }

    //Opening a modal upon clicking the module
    open(content: any) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    }
}
